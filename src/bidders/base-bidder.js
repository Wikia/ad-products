import { utils } from '@wikia/ad-engine';

export class BaseBidder {
	constructor(name, bidderConfig, timeout = 2000) {
		this.name = name;
		this.logGroup = `${name}-bidder`;
		this.bidderConfig = bidderConfig;
		this.timeout = timeout;

		this.resetState();
		this.onResponse = () => this.onResponseCall();

		utils.logger(this.logGroup, 'created');
	}

	addResponseListener(callback) {
		this.onResponseCallbacks.push(callback);
	}

	call() {
		this.response = false;
		this.called = true;

		if (this.callBids) {
			this.callBids(this.onResponse);
		}

		utils.logger(this.logGroup, 'called');
	}

	createWithTimeout(func, msToTimeout = 2000) {
		const timeout = new Promise((resolve, reject) => {
			setTimeout(reject, msToTimeout);
		});

		return Promise.race([new Promise(func), timeout]);
	}

	getSlotBestPrice(slotName) {
		if (this.getBestPrice) {
			return this.getBestPrice(slotName);
		}

		return {};
	}

	getSlotTargetingParams(slotName) {
		if (!this.called || !this.isSlotSupported(slotName) || !this.getTargetingParams) {
			return {};
		}

		return this.getTargetingParams(slotName);
	}

	hasResponse() {
		return this.response;
	}

	isSlotSupported(slotName) {
		if (this.isSupported) {
			return this.isSupported(slotName);
		}

		return false;
	}

	onResponseCall() {
		this.response = true;

		if (this.calculatePrices) {
			this.calculatePrices();
		}

		if (this.onResponseCallbacks) {
			this.onResponseCallbacks.start();
		}

		utils.logger(this.logGroup, 'respond');
	}

	resetState() {
		this.called = false;
		this.response = false;
		this.onResponseCallbacks = [];

		utils.makeLazyQueue(this.onResponseCallbacks, (callback) => {
			callback(this.name);
		});
	}

	waitForResponse() {
		return this.createWithTimeout((resolve) => {
			if (this.hasResponse()) {
				resolve();
			} else {
				this.addResponseListener(resolve);
			}
		}, this.timeout);
	}

	wasCalled() {
		return this.called;
	}
}
