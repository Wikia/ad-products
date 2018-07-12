import { utils } from '@wikia/ad-engine';

export class BaseBidder {
	constructor(bidderConfig, resetListener, timeout = 2000) {
		this.logGroup = 'bidder';
		this.bidderConfig = bidderConfig;
		this.timeout = timeout;

		this.resetState();

		if (resetListener) {
			resetListener(this.resetState);
		}

		this.onResponse = () => this.onResponseCall();
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
	}

	createWithTimeout(func, msToTimeout = 2000) {
		const timeout = new Promise((resolve, reject) => {
			setTimeout(reject, msToTimeout);
		});

		return Promise.race([new Promise(func), timeout]);
	}

	getName() {
		return this.name;
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
