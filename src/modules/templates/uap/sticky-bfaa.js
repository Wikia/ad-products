import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import { logger } from 'ad-engine/src/utils/logger';

const logGroup = 'sticky-bfaa';

export default class StickyBfaa {

	constructor(adSlot, config) {
		this.adSlot = adSlot;
		this.stickinessDelay = 0;
		// time after which we'll unstick slot on user scroll
		this.viewabilityApproveWindow = 5000;
		// time after which we'll remove stickiness even with no user interaction
		this.stickinessRemovalWindow = 10000;
		this.config = config;

		SlotTweaker.onReady(this.adSlot).then(() => {
			this.checkViewability();
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

		function onTabActive() {
			viewabilityApproveTimeout = setTimeout(onViewed, this.viewabilityApproveWindow);
			// we wanted to run it only once
			document.removeEventListener('visibilitychange', onTabActive);
		}

		document.removeEventListener('scroll', this.onPreleaderboardScrollHandler);

		if (document.hidden) {
			// let's start ticking from the moment when browser tab is active
			document.addEventListener('visibilitychange', onTabActive);
		} else {
			viewabilityApproveTimeout = setTimeout(onViewed, this.viewabilityApproveWindow);
		}

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

	checkViewability() {
		function onPreleaderboardScroll() {
			clearTimeout(this.stickinessApplyTimeout);
			this.onStickinessApplyTimeout();
		}
		// after .bind() is called a new function reference is created so we need to keep reference to it
		this.onPreleaderboardScrollHandler = onPreleaderboardScroll.bind(this);
		this.stickinessApplyTimeout = setTimeout(this.onStickinessApplyTimeout.bind(this), this.stickinessDelay);

		document.addEventListener('scroll', this.onPreleaderboardScrollHandler);
	}
}
