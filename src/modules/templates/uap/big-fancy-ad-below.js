import SlotService from 'ad-engine/services/slot-service';
import SlotTweaker from 'ad-engine/services/slot-tweaker';

import ResolvedState from './resolved-state';
import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';

export default class BigFancyAdBelow {
	/**
	 * Constructor
	 *
	 * @param {object} params
	 */
	constructor(params) {
		this.adSlot = SlotService.getBySlotName('BOTTOM_LEADERBOARD');
		this.container = document.getElementById(this.adSlot.getId());
		this.params = params;
		this.videoSettings = null;
	}

	/**
	 * Initializes the BFAA unit
	 */
	init() {
		if (!this.container) {
			return;
		}

		this.container.classList.add('bfab-template');
		this.videoSettings = new VideoSettings(this.params);
		ResolvedState.setImage(this.videoSettings);
		SlotTweaker.makeResponsive(this.adSlot, this.params.aspectRatio);
		SlotTweaker.onReady(this.adSlot, () => this.adIsReady());
	}

	adIsReady() {
		if (UniversalAdPackage.isVideoEnabled(this.params)) {
			UniversalAdPackage.loadVideoAd(this.videoSettings);
		}
	}
}
