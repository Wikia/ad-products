'use strict';

import ResolvedState from './resolved-state';
import SlotService from 'ad-engine/services/slot-service';
import SlotTweaker from 'ad-engine/services/slot-tweaker';
import ToggleAnimation from './ui/toggle-animation';
import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';

export default class BigFancyAdAbove {
	/**
	 * Constructor
	 *
	 * @param {object} params
	 */
	constructor(params) {
		this.adSlot = SlotService.getBySlotName('TOP_LEADERBOARD');
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

		UniversalAdPackage.init(this.params.uap);

		this.videoSettings = new VideoSettings(this.params);

		this.container.style.backgroundColor = this.getBackgroundColor();
		this.container.classList.add('bfaa-template');
		ResolvedState.setImage(this.videoSettings);
		SlotTweaker.makeResponsive(this.adSlot, this.params.aspectRatio);
		SlotTweaker.onReady(this.adSlot, this.adIsReady.bind(this));
	}

	getBackgroundColor() {
		return this.params.backgroundColor ? '#' + this.params.backgroundColor.replace('#', '') : '000';
	}

	adIsReady(iframe) {
		document.body.style.paddingTop = iframe.parentElement.style.paddingBottom;

		if (UniversalAdPackage.isVideoEnabled(this.params)) {
			UniversalAdPackage.loadVideoAd(this.videoSettings)
				.then((video) => {
					if (!this.params.splitLayoutVideoPosition) {
						video.addEventListener('wikiaAdStarted', () => {
							this.recalculatePaddingTop(this.params.videoAspectRatio);
						});

						video.addEventListener('wikiaAdCompleted', () => {
							this.recalculatePaddingTop(this.params.aspectRatio);
						});
					}

					return video;
				});
		}
	}

	recalculatePaddingTop(finalAspectRatio) {
		document.body.style.paddingTop = `${100 / finalAspectRatio}%`;

		this.container.style.height = this.container.offsetHeight + 'px';
		// get offsetWidth from existing DOM element in order to force repaint
		this.container.style.height = this.container.offsetWidth / finalAspectRatio + 'px';

		setTimeout(() => {
			// clear height so ad is responsive again
			this.container.style.height = '';
		}, ToggleAnimation.duration);
	}
}
