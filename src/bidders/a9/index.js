import { context } from '@wikia/ad-engine';
import { BaseBidder } from './../base-bidder';

export class A9 extends BaseBidder {
	constructor(bidderConfig, resetListener, timeout = 2000) {
		super(bidderConfig, resetListener, timeout);

		this.logGroup = 'a9-bidder';
		this.name = 'a9';
		this.loaded = false;
		this.isCMPEnabled = context.get('custom.isCMPEnabled');
		this.amazonId = this.bidderConfig.amazonId;
		this.slots = this.bidderConfig.slots;
		this.slotsVideo = this.bidderConfig.slotsVideo;
		this.gdpr = this.bidderConfig.gdpr;
		this.bids = {};
		this.priceMap = {};
		this.timeout = timeout;
	}

	calculatePrices() {
		Object
			.keys(this.bids)
			.forEach((slotName) => {
				this.priceMap[slotName] = this.bids[slotName].amznbid;
			});
	}

	callBids(onResponse) {
		let a9Slots;

		if (!this.loaded) {
			this.insertScript();
			this.configureApstag();

			window.apstag.init({
				pubID: this.amazonId,
				videoAdServer: 'DFP',
				gdpr: this.isCMPEnabled ? {
					enabled: this.gdpr.enabled,
					consent: this.gdpr.consent,
					cmpTimeout: 2000
				} : undefined
			});

			this.loaded = true;
		}

		this.bids = {};
		this.priceMap = {};

		a9Slots = Object
			.keys(this.slots)
			.map(this.createSlotDefinition, this);

		if (this.bidderConfig.videoEnabled) {
			a9Slots = a9Slots.concat(this.slotsVideo.map(this.createVideoSlotDefinition));
		}

		window.apstag.fetchBids({
			slots: a9Slots,
			timeout: this.timeout
		}, (currentBids) => {
			currentBids.forEach((bid) => {
				this.bids[bid.slotID] = bid;
			});

			onResponse();
		});
	}

	configureApstag() {
		window.apstag = window.apstag || {};
		window.apstag._Q = window.apstag._Q || [];

		if (typeof window.apstag.init === 'undefined') {
			window.apstag.init = (...args) => {
				this.configureApstagCommand('i', args);
			};
		}

		if (typeof window.apstag.fetchBids === 'undefined') {
			window.apstag.fetchBids = (...args) => {
				this.configureApstagCommand('f', args);
			};
		}
	}

	configureApstagCommand(command, args) {
		window.apstag._Q.push([command, args]);
	}

	createSlotDefinition(slotName) {
		return {
			sizes: this.slots[slotName],
			slotID: slotName,
			slotName
		};
	}

	createVideoSlotDefinition(slotID) {
		return {
			slotID,
			mediaType: 'video'
		};
	}

	getBestPrice(slotName) {
		return this.priceMap[slotName] ? { a9: this.priceMap[slotName] } : {};
	}

	getPrices() {
		return this.priceMap;
	}

	getTargetingParams(slotName) {
		const bid = this.bids[slotName];

		if (!bid) {
			return {};
		}

		return {
			amznbid: bid.amznbid,
			amzniid: bid.amzniid,
			amznsz: bid.amznsz,
			amznp: bid.amznp
		};
	}

	insertScript() {
		const a9Script = document.createElement('script');

		a9Script.type = 'text/javascript';
		a9Script.async = true;
		a9Script.src = '//c.amazon-adsystem.com/aax2/apstag.js';

		const node = document.getElementsByTagName('script')[0];

		node.parentNode.insertBefore(a9Script, node);
	}

	isSupported(slotName) {
		return this.slots[slotName] || this.slotsVideo.indexOf(slotName) >= 0;
	}
}
