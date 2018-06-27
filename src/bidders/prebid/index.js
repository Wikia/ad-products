import { decorate } from 'core-decorators';
import { context, utils } from '@wikia/ad-engine';
import { BaseBidder } from './../base-bidder';
import { getPriorities } from './adapters-registry';
import {getPrebidBestPrice, transformPriceFromCpm} from './price-helper';
import { getSettings } from './prebid-settings';
import { setupAdUnits } from './prebid-helper';

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
		this.prebidConfig = {
			debug: utils.queryString.get('pbjs_debug') === '1',
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
			window.addEventListener('adengine.lookup.prebid.lazy', () => {
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

	getBestPrice(name) {
		const slotName = context.get(`slots.${name}.bidderAlias`) || name;

		return getPrebidBestPrice(slotName);
	}

	getTargetingKeysToReset() {
		return [
			'hb_bidder',
			'hb_adid',
			'hb_pb',
			'hb_size'
		];
	}

	getTargetingParams(name) {
		let slotParams = {};

		const slotName = context.get(`slots.${name}.bidderAlias`) || name;

		if (window.pbjs && typeof window.pbjs.getBidResponsesForAdUnitCode === 'function') {
			const bids = window.pbjs.getBidResponsesForAdUnitCode(slotName).bids || [];

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

				slotParams = bidParams.adserverTargeting;
			}
		}

		return slotParams || {};
	}

	isSupported(name) {
		const slotName = context.get(`slots.${name}.bidderAlias`) || name;

		return this.adUnits && this.adUnits.some(
			adUnit => adUnit.code === slotName
		);
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
