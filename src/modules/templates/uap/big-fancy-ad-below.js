import SlotTweaker from 'ad-engine/services/slot-tweaker';

import ResolvedState from './resolved-state';
import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';

export default class BigFancyAdBelow {
	static getName() {
		return 'bfab';
	}

	/**
	 * Constructor
	 *
	 * @param {object} adSlot
	 */
	constructor(adSlot) {
		this.adSlot = adSlot;
		this.container = document.getElementById(this.adSlot.getId());
		this.videoSettings = null;
	}

	/**
	 * Initializes the BFAA unit
	 */
	init(params) {
		this.params = params;
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
