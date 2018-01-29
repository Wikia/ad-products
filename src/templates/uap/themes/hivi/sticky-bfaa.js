import { EventEmitter } from 'events';
import autobind from 'core-decorators/es/autobind';
import { AdSlot, slotTweaker, utils } from '@wikia/ad-engine';

export class StickyBfaa extends EventEmitter {
	// time after which we'll remove stickiness even with no user interaction
	static STICKINESS_REMOVAL_WINDOW = 10000;
	static DEFAULT_STICKINESS_ADDITIONAL_TIME = 3000;
	static LOG_GROUP = 'sticky-bfaa';
	static STICKINESS_CHANGE_EVENT = Symbol('stickinessChange');

	constructor(
		adSlot,
		stickyUntilVideoViewed = false,
		stickyAdditionalTime = StickyBfaa.DEFAULT_STICKINESS_ADDITIONAL_TIME
	) {
		super();

		this.adSlot = adSlot;
		this.stickyUntilVideoViewed = stickyUntilVideoViewed;
		this.stickyAdditionalTime = stickyAdditionalTime;
		this.sticky = false;
		this.logger = (...args) => utils.logger(StickyBfaa.LOG_GROUP, ...args);
	}

	async run() {
		await slotTweaker.onReady(this.adSlot);

		if (document.hidden) {
			window.addEventListener('visibilitychange', () => this.onAdReady(), { once: true });
		} else {
			this.onAdReady();
		}
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

	@autobind
	onViewed() {
		let revertTimeout = null;
		const adContainer = this.adSlot.getElement();
		const shouldRevertImmediately = Math.abs(window.scrollY - adContainer.offsetTop) < (adContainer.offsetHeight / 2);
		const onRevertTimeout = () => {
			clearTimeout(revertTimeout);
			document.removeEventListener('scroll', onRevertTimeout);
			this.revertStickiness();
		};

		this.adSlot.removeListener(AdSlot.SLOT_VIEWED_EVENT, this.onViewed);
		setTimeout(() => {
			document.addEventListener('scroll', onRevertTimeout);
			revertTimeout = setTimeout(onRevertTimeout, (shouldRevertImmediately ? 0 : StickyBfaa.STICKINESS_REMOVAL_WINDOW));
		}, this.stickyAdditionalTime);

		this.logger(`slotViewed triggered on ${this.adSlot.getSlotName()}`);
	}

	onAdReady() {
		this.applyStickiness();
		this.adSlot.once(this.stickyUntilVideoViewed ? AdSlot.VIDEO_VIEWED_EVENT : AdSlot.SLOT_VIEWED_EVENT, this.onViewed);
	}
}
