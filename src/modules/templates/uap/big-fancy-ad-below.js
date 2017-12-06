import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import defer from 'ad-engine/src/utils/defer';

import AdvertisementLabel from './ui/advertisement-label';
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

		if (params.template === 'hivi') {
			SlotTweaker.onReady(this.adSlot)
				.then(this.adIsReady.bind(this));
		} else {
			ResolvedState.setImage(this.videoSettings)
				.then(() => SlotTweaker.makeResponsive(this.adSlot, this.params.aspectRatio))
				.then(this.adIsReady.bind(this));
		}

		if (this.params.theme === 'hivi') {
			const advertisementLabel = new AdvertisementLabel();

			this.container.appendChild(advertisementLabel.render());
		}
	}

	adIsReady() {
		if (UniversalAdPackage.isVideoEnabled(this.params)) {
			defer(UniversalAdPackage.loadVideoAd, this.videoSettings);
		}
	}
}
