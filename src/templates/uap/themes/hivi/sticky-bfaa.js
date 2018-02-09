import { EventEmitter } from 'events';
import { isFunction } from 'lodash';
import { AdSlot, slotTweaker, utils } from '@wikia/ad-engine';

export class StickyBfaa extends EventEmitter {
	static LOG_GROUP = 'sticky-bfaa';
	static STICKINESS_CHANGE_EVENT = Symbol('stickinessChange');

	constructor(
		adSlot,
		customWhen = Promise.resolve()
	) {
		super();

		this.adSlot = adSlot;
		this.customWhen = customWhen;
		this.sticky = false;
		this.isRevertStickinessBlocked = false;
		this.logger = (...args) => utils.logger(StickyBfaa.LOG_GROUP, ...args);
	}

	async run() {
		await slotTweaker.onReady(this.adSlot);

		if (document.hidden) {
			await utils.once(window, 'visibilitychange');
		}

		this.onAdReady();
	}

	isSticky() {
		return this.sticky;
	}

	applyStickiness() {
		if (!this.sticky) {
			this.logger('Applying bfaa stickiness');
			this.sticky = true;
			this.emit(StickyBfaa.STICKINESS_CHANGE_EVENT, this.sticky);
		} else {
			this.logger('bfaa stickiness is already applied');
		}
	}

	revertStickiness() {
		if (this.sticky) {
			this.logger('Reverting bfaa stickiness');
			this.sticky = false;
			this.emit(StickyBfaa.STICKINESS_CHANGE_EVENT, this.sticky);
		} else {
			this.logger('bfaa stickiness is already reverted');
		}
	}

	async registerRevertStickiness() {
		this.logger('waiting for user interaction');
		await utils.once(window, 'scroll');
		await utils.wait();
		if (!this.isRevertStickinessBlocked) {
			this.revertStickiness();
		} else {
			this.registerRevertStickiness();
		}
	}

	blockRevertStickiness() {
		this.isRevertStickinessBlocked = true;
	}

	unblockRevertStickiness() {
		this.isRevertStickinessBlocked = false;
	}

	async onAdReady() {
		this.applyStickiness();
		this.logger('waiting for viewability and custom condition');

		await Promise.all([
			utils.once(this.adSlot, AdSlot.SLOT_VIEWED_EVENT),
			isFunction(this.customWhen) ? this.customWhen() : this.customWhen
		]);

		this.registerRevertStickiness();
	}
}
