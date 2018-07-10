import { decorate } from 'core-decorators';
import { context, events, utils } from '@wikia/ad-engine';
import { BaseBidder } from './../base-bidder';
import { getPriorities } from './adapters-registry';
import { getPrebidBestPrice } from './price-helper';
import { getSettings } from './prebid-settings';
import { getAvailableBidsByAdUnitCode, setupAdUnits } from './prebid-helper';

export const prebidLazyRun = method => (...args) => window.pbjs.que.push(() => method.apply(this, args));

export class Prebid extends BaseBidder {
	constructor(bidderConfig, resetListener, timeout = 2000) {
		super(bidderConfig, resetListener, timeout);

		this.logGroup = 'prebid-bidder';
		this.name = 'prebid';
		this.loaded = false;
		this.lazyLoaded = false;
		this.isLazyLoadingEnabled = this.bidderConfig.lazyLoadingEnabled;
		this.isCMPEnabled = context.get('custom.isCMPEnabled');
		this.adUnits = setupAdUnits(this.bidderConfig, this.isLazyLoadingEnabled ? 'pre' : 'off');
		this.bidsRefreshing = context.get('bidders.prebid.bidsRefreshing');
		this.prebidConfig = {
			debug: utils.queryString.get('pbjs_debug') === '1' || utils.queryString.get('pbjs_debug') === 'true',
			enableSendAllBids: true,
			bidderSequence: 'random',
			bidderTimeout: this.timeout,
			userSync: {
				iframeEnabled: true,
				enabledBidders: [],
				syncDelay: 6000
			}
		};

		if (this.isCMPEnabled) {
			this.prebidConfig.consentManagement = {
				cmpApi: 'iab',
				timeout: this.timeout,
				allowAuctionWithoutConsent: false
			};
		}

		window.pbjs = window.pbjs || {};
		window.pbjs.que = window.pbjs.que || [];

		this.applyConfig(this.prebidConfig);

		if (this.bidsRefreshing && this.bidsRefreshing.enabled) {
			this.refreshBids();
		}
	}

	static validResponseStatusCode = 1;
	static errorResponseStatusCode = 2;

	@decorate(prebidLazyRun)
	applyConfig(config) {
		window.pbjs.setConfig(config);
	}

	@decorate(prebidLazyRun)
	applySettings() {
		window.pbjs.bidderSettings = getSettings();
	}

	calculatePrices() {
		// biddersPerformanceMap = performanceTracker.updatePerformanceMap(biddersPerformanceMap);
	}

	callBids(bidsBackHandler) {
		if (!this.adUnits) {
			this.adUnits = setupAdUnits(this.bidderConfig, this.isLazyLoadingEnabled ? 'pre' : 'off');
		}

		if (this.adUnits.length > 0) {
			this.applySettings();
			this.requestBids(this.adUnits, bidsBackHandler, this.removeAdUnits);
		}

		this.loaded = true;

		if (this.isLazyLoadingEnabled) {
			events.on(events.PREBID_LAZY_CALL, () => {
				this.lazyCall(bidsBackHandler);
			});
		}
	}

	lazyCall(bidsBackHandler) {
		if (!this.lazyLoaded) {
			this.lazyLoaded = true;

			const adUnitsLazy = setupAdUnits(this.bidderConfig, 'post');

			if (adUnitsLazy.length > 0) {
				this.requestBids(adUnitsLazy, bidsBackHandler);

				this.adUnits = this.adUnits.concat(adUnitsLazy);
			}
		}
	}

	removeAdUnits() {
		(window.pbjs.adUnits || []).forEach((adUnit) => {
			window.pbjs.removeAdUnit(adUnit.code);
		});
	}

	getBestPrice(slotName) {
		const slotAlias = context.get(`slots.${slotName}.bidderAlias`) || slotName;

		return getPrebidBestPrice(slotAlias);
	}

	getTargetingKeysToReset() {
		return [
			'hb_bidder',
			'hb_adid',
			'hb_pb',
			'hb_size'
		];
	}

	getTargetingParams(slotName) {
		let slotParams = {};

		const slotAlias = context.get(`slots.${slotName}.bidderAlias`) || slotName;
		const bids = getAvailableBidsByAdUnitCode(slotAlias);

		if (bids.length) {
			let bidParams = null;
			const priorities = getPriorities();

			bids.forEach((param) => {
				if (!bidParams) {
					bidParams = param;
				} else if (bidParams.cpm === param.cpm) {
					if (priorities[bidParams.bidder] === priorities[param.bidder]) {
						bidParams = bidParams.timeToRespond > param.timeToRespond ? param : bidParams;
					} else {
						bidParams = priorities[bidParams.bidder] < priorities[param.bidder] ? param : bidParams;
					}
				} else {
					bidParams = bidParams.cpm < param.cpm ? param : bidParams;
				}
			});

			if (bidParams) {
				slotParams = bidParams.adserverTargeting;
			}
		}

		return slotParams || {};
	}

	isSupported(slotName) {
		const slotAlias = context.get(`slots.${slotName}.bidderAlias`) || slotName;

		return this.adUnits && this.adUnits.some(
			adUnit => adUnit.code === slotAlias
		);
	}

	refreshBids() {
		window.pbjs.onEvent('bidWon', (winningBid) => {
			if (this.bidsRefreshing.slots.indexOf(winningBid.adUnitCode) !== -1) {
				const adUnitsToRefresh = this.adUnits.filter(
					adUnit => (
						adUnit.code === winningBid.adUnitCode &&
						adUnit.bids &&
						adUnit.bids[0] &&
						adUnit.bids[0].bidder === winningBid.bidderCode
					)
				);

				this.requestBids(adUnitsToRefresh);
			}
		});
	}

	@decorate(prebidLazyRun)
	requestBids(adUnits, bidsBackHandler, withRemove = undefined) {
		if (withRemove) {
			withRemove();
		}

		window.pbjs.requestBids({
			adUnits,
			bidsBackHandler
		});
	}
}
