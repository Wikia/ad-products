import SlotTweaker from 'ad-engine/services/slot-tweaker';

import ResolvedState from './resolved-state';
import ToggleAnimation from './ui/toggle-animation';
import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';

export default class BigFancyAdAbove {
	static getName() {
		return 'bfaa';
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

		UniversalAdPackage.init(this.params.uap);

		this.videoSettings = new VideoSettings(this.params);

		this.container.style.backgroundColor = this.getBackgroundColor();
		this.container.classList.add('bfaa-template');
		ResolvedState.setImage(this.videoSettings);
		SlotTweaker.makeResponsive(this.adSlot, this.params.aspectRatio);
		SlotTweaker.onReady(this.adSlot, this.adIsReady.bind(this));
	}

	getBackgroundColor() {
		const color = `#${this.params.backgroundColor.replace('#', '')}`;

		return this.params.backgroundColor ? color : '#000';
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

		this.container.style.height = `${this.container.offsetHeight}px`;
		// get offsetWidth from existing DOM element in order to force repaint
		this.container.style.height = `${this.container.offsetWidth / finalAspectRatio}px`;

		setTimeout(() => {
			// clear height so ad is responsive again
			this.container.style.height = '';
		}, ToggleAnimation.duration);
	}
}
