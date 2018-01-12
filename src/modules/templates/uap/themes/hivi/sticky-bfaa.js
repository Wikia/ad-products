import { EventEmitter } from 'events';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import { SLOT_VIEWED_EVENT } from 'ad-engine/src/models/ad-slot';
import { logger } from 'ad-engine/src/utils/logger';

export default class StickyBfaa extends EventEmitter {
	constructor(adSlot, stickyUntilVideoViewed = false) {
		super();

		this.adSlot = adSlot;
		this.stickyUntilVideoViewed = stickyUntilVideoViewed;
		this.onViewed = this.onViewed.bind(this);
		this.sticky = false;
		this.logger = (...args) => logger(StickyBfaa.LOG_GROUP, ...args);
	}

	run() {
		SlotTweaker.onReady(this.adSlot).then(() => {
			if (document.hidden) {
				window.addEventListener('visibilitychange', () => this.onAdReady(), { once: true });
			} else {
				this.onAdReady();
			}
		});
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

	onViewed() {
		let revertTimeout = null;
		const adContainer = this.adSlot.getElement();
		const shouldRevertImmediately = Math.abs(window.scrollY - adContainer.offsetTop) < (adContainer.offsetHeight / 2);
		const onRevertTimeout = () => {
			clearTimeout(revertTimeout);
			document.removeEventListener('scroll', onRevertTimeout);
			this.revertStickiness();
		};

		this.adSlot.removeListener(SLOT_VIEWED_EVENT, this.onViewed);
		document.addEventListener('scroll', onRevertTimeout);
		revertTimeout = setTimeout(onRevertTimeout, (shouldRevertImmediately ? 0 : StickyBfaa.STICKINESS_REMOVAL_WINDOW));

		this.logger(`slotViewed triggered on ${this.adSlot.getSlotName()}`);
	}

	onAdReady() {
		this.applyStickiness();
		if (!this.stickyUntilVideoViewed) {
			this.adSlot.once(SLOT_VIEWED_EVENT, this.onViewed);
		}
	}

	onVideoReady(video) {
		if (this.stickyUntilVideoViewed) {
			video.addEventListener('viewable_impression', this.onViewed);
		}
	}
}

Object.assign(StickyBfaa, {
	// time after which we'll remove stickiness even with no user interaction
	STICKINESS_REMOVAL_WINDOW: 10000,
	LOG_GROUP: 'sticky-bfaa',
	STICKINESS_CHANGE_EVENT: Symbol('stickinessChange')
});
