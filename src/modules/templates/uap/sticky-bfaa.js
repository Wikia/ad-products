import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import { SLOT_VIEWED_EVENT } from 'ad-engine/src/models/ad-slot';
import { logger } from 'ad-engine/src/utils/logger';

const logGroup = 'sticky-bfaa';

// time after which we'll remove stickiness even with no user interaction
const STICKINESS_REMOVAL_WINDOW = 10000;
// time after which we'll unstick slot on user scroll even if it's not viewed
const VIEWABILITY_APPROVAL_WINDOW = 5000;

export default class StickyBfaa {
	constructor(adSlot, config) {
		this.adSlot = adSlot;
		this.config = config;
		this.onViewed = this.onViewed.bind(this);
		this.viewabilityApproveTimeout = null;
		this.isSticky = false;
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

	applyStickiness() {
		if (!this.isSticky) {
			logger(logGroup, 'Applying bfaa stickiness');
			this.isSticky = true;
			this.config.onStickBfaaCallback(this.adSlot);
		} else {
			logger(logGroup, 'bfaa stickiness is already applied');
		}
	}

	revertStickiness() {
		if (this.isSticky) {
			logger(logGroup, 'Reverting bfaa stickiness');
			this.isSticky = false;
			this.config.onUnstickBfaaCallback(this.adSlot);
		} else {
			logger(logGroup, 'bfaa stickiness is already reverted');
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
		clearTimeout(this.viewabilityApproveTimeout);
		document.addEventListener('scroll', onRevertTimeout);
		revertTimeout = setTimeout(onRevertTimeout, (shouldRevertImmediately ? 0 : STICKINESS_REMOVAL_WINDOW));

		logger(logGroup, `slotViewed triggered on ${this.adSlot.getSlotName()}`);
	}

	onAdReady() {
		this.viewabilityApproveTimeout = setTimeout(this.onViewed, VIEWABILITY_APPROVAL_WINDOW);
		this.applyStickiness();
		this.adSlot.once(SLOT_VIEWED_EVENT, this.onViewed);
	}
}
