import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import { logger } from 'ad-engine/src/utils/logger';

const logGroup = 'sticky-bfaa';

export default class StickyBfaa {

	constructor(adSlot, config) {
		this.adSlot = adSlot;
		// time after which we'll unstick slot on user scroll
		this.viewabilityApproveWindow = 5000;
		// time after which we'll remove stickiness even with no user interaction
		this.stickinessRemovalWindow = 10000;
		this.config = config;

		SlotTweaker.onReady(this.adSlot).then(() => {
			this.onStickinessApplyTimeout();
		});
	}

	applyStickiness() {
		logger(logGroup, 'Applying bfaa stickiness');
		this.config.onStickBfaaCallback(this.adSlot);

		return function revert() {
			logger(logGroup, 'Reverting bfaa stickiness');
			this.config.onUnstickBfaaCallback(this.adSlot);
		};
	}

	onStickinessApplyTimeout() {
		let revertStickiness = function () {},
			viewabilityApproveTimeout = null,
			isOnViewedFired = false;
		const desktopNavbarWrapper = document.querySelector(this.config.desktopNavbarWrapperSelector);

		function onViewed() {
			const revertTimeout = setTimeout(onRevertTimeout, this.stickinessRemovalWindow);

			function onRevertTimeout() {
				clearTimeout(revertTimeout);
				document.removeEventListener('scroll', onRevertTimeout);
				revertStickiness();
			}

			isOnViewedFired = true;
			clearTimeout(viewabilityApproveTimeout);
			viewabilityApproveTimeout = null;
			document.addEventListener('scroll', onRevertTimeout);

			if (desktopNavbarWrapper && desktopNavbarWrapper.classList.contains('bfaa-pinned')) {
				onRevertTimeout();
			}
		}

		viewabilityApproveTimeout = setTimeout(onViewed, this.viewabilityApproveWindow);

		if (this.adSlot.isViewed) {
			logger(logGroup, `Slot ${this.adSlot.getSlotName()} viewed`);
			onViewed();
		} else {
			revertStickiness = this.applyStickiness().bind(this);

			this.adSlot.on('slotViewed', () => {
				logger(logGroup, `slotViewed triggered on ${this.adSlot.getSlotName()}`);
				// don't send events once again if onViewed was fired by timeout
				if (!isOnViewedFired) {
					onViewed();
				}
			});
		}
	}
}
