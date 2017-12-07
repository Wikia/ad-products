import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import defer from 'ad-engine/src/utils/defer';

import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';
import { ClassicBfab, ResolvedState } from './themes/classic';
import { HiViBfab } from './themes/hivi';

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
		this.theme = null;
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

		if (this.params.theme === 'hivi') {
			this.theme = new HiViBfab(this.adSlot, this.params);
			SlotTweaker.onReady(this.adSlot)
				.then(iframe => this.adIsReady(iframe));
		} else {
			this.theme = new ClassicBfab(this.adSlot, this.params);
			ResolvedState.setImage(this.videoSettings)
				.then(() => SlotTweaker.makeResponsive(this.adSlot, this.params.aspectRatio))
				.then(iframe => this.adIsReady(iframe));
		}
	}

	adIsReady(iframe) {
		if (UniversalAdPackage.isVideoEnabled(this.params)) {
			defer(UniversalAdPackage.loadVideoAd, this.videoSettings)
				.then((video) => {
					this.theme.videoIsReady(video);
					return video;
				});
		}

		this.theme.adIsReady(iframe);
	}
}
