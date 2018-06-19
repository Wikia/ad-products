import { context, utils } from '@wikia/ad-engine';
import { BaseBidder } from './../base-bidder';
import { universalAdPackage } from './../../templates/uap/universal-ad-package';
import { getPriorities } from './adapters-registry';
import { getPrebidBestPrice } from './price-helper';
import { getSettings } from './prebid-settings';
import { setupAdUnits } from './prebid-helper';

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
		window.pbjs.que.push(() => {
			window.pbjs.setConfig(this.prebidConfig);
		});
	}

	static validResponseStatusCode = 1;
	static errorResponseStatusCode = 2;

	calculatePrices() {
		// biddersPerformanceMap = performanceTracker.updatePerformanceMap(biddersPerformanceMap);
	}

	callBids(bidsBackHandler) {
		if (!this.adUnits) {
			this.adUnits = setupAdUnits(this.bidderConfig, this.isLazyLoadingEnabled ? 'pre' : 'off');
		}

		if (this.adUnits.length > 0) {
			window.pbjs.que.push(() => {
				window.pbjs.bidderSettings = getSettings();
			});

			this.requestBids(this.adUnits, bidsBackHandler, true);
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

			if (!universalAdPackage.isFanTakeoverLoaded()) {
				const adUnitsLazy = setupAdUnits(this.bidderConfig, 'post');

				if (adUnitsLazy.length > 0) {
					this.requestBids(adUnitsLazy, bidsBackHandler, false);

					this.adUnits = this.adUnits.concat(adUnitsLazy);
				}
			}
		}
	}

	removeAdUnits() {
		(window.pbjs.adUnits || []).forEach((adUnit) => {
			window.pbjs.removeAdUnit(adUnit.code);
		});
	}

	getBestPrice(slotName) {
		return getPrebidBestPrice(slotName);
	}

	getTargetingParams(slotName) {
		let slotParams = {};

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

	isSupported(slotName) {
		return this.adUnits && this.adUnits.some(
			adUnit => adUnit.code === slotName
		);
	}

	requestBids(adUnits, bidsBackHandler, withRemove) {
		window.pbjs.que.push(() => {
			if (withRemove) {
				this.removeAdUnits();
			}

			window.pbjs.requestBids({
				adUnits,
				bidsBackHandler
			});
		});
	}
}
