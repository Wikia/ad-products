import Context from 'ad-engine/src/services/context-service';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import defer from 'ad-engine/src/utils/defer';

import ResolvedState from './resolved-state';
import ToggleAnimation from './ui/toggle-animation';
import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';
import StickyBfaa from './sticky-bfaa';

export default class BigFancyAdAbove {
	static getName() {
		return 'bfaa';
	}

	static getDefaultConfig() {
		return {
			desktopNavbarWrapperSelector: '.wds-global-navigation-wrapper',
			handleNavbar: false,
			mobileNavbarWrapperSelector: '.global-navigation-mobile-wrapper',
			slotSibling: '.topic-header',
			slotsToEnable: [
				'BOTTOM_LEADERBOARD',
				'INCONTENT_BOXAD'
			],
			onStickBfaaCallback: (adSlot) => {
				const bfaa = adSlot.getElement();

				bfaa.classList.add('sticky-bfaa');

				setTimeout(() => {
					bfaa.style.top = 0;
				}, 0);
			},
			onUnstickBfaaCallback: (adSlot) => {
				const bfaa = adSlot.getElement(),
					adHeight = bfaa.offsetHeight;

				bfaa.style.top = `${window.scrollY === 0 ? 0 : -adHeight}px`;
				bfaa.style.transition = '';

				setTimeout(() => {
					bfaa.style.top = 0;
					bfaa.classList.remove('sticky-bfaa');
				}, 1000);
			}
		};
	}

	/**
	 * Constructor
	 *
	 * @param {object} adSlot
	 */
	constructor(adSlot) {
		this.adSlot = adSlot;
		this.config = Context.get('templates.bfaa');
		this.container = document.getElementById(this.adSlot.getId());
		this.videoSettings = null;
		this.stickyBfaa = null;
	}

	/**
	 * Initializes the BFAA unit
	 */
	init(params) {
		this.params = params;

		if (!this.container) {
			return;
		}

		UniversalAdPackage.init(this.params, this.config.slotsToEnable);

		if (this.params.isSticky) {
			this.stickyBfaa = new StickyBfaa(this.adSlot, this.config);
			this.stickyBfaa.run();
		}

		this.videoSettings = new VideoSettings(this.params);
		this.container.style.backgroundColor = this.getBackgroundColor();
		this.container.classList.add('bfaa-template');
		ResolvedState.setImage(this.videoSettings)
			.then(() => SlotTweaker.makeResponsive(this.adSlot, this.params.aspectRatio))
			.then(this.adIsReady.bind(this));
	}

	setupNavbar() {
		const desktopNavbarWrapper = document.querySelector(this.config.desktopNavbarWrapperSelector);
		const mobileNavbarWrapper = document.querySelector(this.config.mobileNavbarWrapperSelector);
		const slotParent = this.container.parentNode;
		const sibling = document.querySelector(this.config.slotSibling) || this.container.nextElementSibling;

		if (mobileNavbarWrapper) {
			slotParent.insertBefore(mobileNavbarWrapper, sibling);
		}

		if (desktopNavbarWrapper) {
			slotParent.insertBefore(desktopNavbarWrapper, sibling);
		}
	}

	getBackgroundColor() {
		const color = `#${this.params.backgroundColor.replace('#', '')}`;

		return this.params.backgroundColor ? color : '#000';
	}

	adIsReady(iframe) {
		document.body.style.paddingTop = iframe.parentElement.style.paddingBottom;
		document.body.classList.add('has-bfaa');

		if (this.config.handleNavbar) {
			this.setupNavbar();
		}

		if (UniversalAdPackage.isVideoEnabled(this.params)) {
			defer(UniversalAdPackage.loadVideoAd, this.videoSettings) // defers for proper rendering
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
