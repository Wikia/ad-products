import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import { logger } from 'ad-engine/src/utils/logger';

const logGroup = 'sticky-bfaa';

export default class StickyBfaa {

	constructor(adSlot, config) {
		this.adSlot = adSlot;
		this.config = config;
		this.isOnViewedFired = false;
		// time after which we'll remove stickiness even with no user interaction
		this.stickinessRemovalWindow = 10000;
		// time after which we'll unstick slot on user scroll
		this.viewabilityApproveWindow = 5000;
	}

	run() {
		SlotTweaker.onReady(this.adSlot).then(() => {
			this.onStickinessApplyTimeout();
		});
	}

	applyStickiness() {
		logger(logGroup, 'Applying bfaa stickiness');
		this.config.onStickBfaaCallback(this.adSlot);
	}

	revertStickiness() {
		logger(logGroup, 'Reverting bfaa stickiness');
		this.config.onUnstickBfaaCallback(this.adSlot);
	}

	onViewed() {
		const desktopNavbarWrapper = document.querySelector(this.config.desktopNavbarWrapperSelector);
		const onRevertTimeout = callRevertFromTimeout.bind(this);
		const revertTimeout = setTimeout(onRevertTimeout, this.stickinessRemovalWindow);

		function callRevertFromTimeout() {
			clearTimeout(revertTimeout);
			document.removeEventListener('scroll', onRevertTimeout);
			this.revertStickiness();
		}

		this.isOnViewedFired = true;
		clearTimeout(this.viewabilityApproveTimeout);
		document.addEventListener('scroll', onRevertTimeout);

		if (desktopNavbarWrapper && desktopNavbarWrapper.classList.contains('bfaa-pinned')) {
			onRevertTimeout();
		}
	}

	onStickinessApplyTimeout() {
		this.viewabilityApproveTimeout = setTimeout(this.onViewed.bind(this), this.viewabilityApproveWindow);

		if (this.adSlot.isViewed) {
			logger(logGroup, `Slot ${this.adSlot.getSlotName()} viewed`);
			this.onViewed().bind(this)();
		} else {
			this.applyStickiness.bind(this)();
			this.adSlot.on('slotViewed', () => {
				logger(logGroup, `slotViewed triggered on ${this.adSlot.getSlotName()}`);
				// don't send events once again if onViewed was fired by timeout
				if (!this.isOnViewedFired) {
					this.onViewed.bind(this)();
				}
			});
		}
	}
}
