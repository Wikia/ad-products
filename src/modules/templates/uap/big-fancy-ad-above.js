import Context from 'ad-engine/src/services/context-service';
import defer from 'ad-engine/src/utils/defer';

import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';
import * as classicTheme from './themes/classic';
import * as hiviTheme from './themes/hivi';

export default class BigFancyAdAbove {
	static getName() {
		return 'bfaa';
	}

	static getDefaultConfig() {
		const calculateStickyTopPosition = adHeight => `${(window.scrollY <= adHeight) ? -window.scrollY : -adHeight}px`;

		function onStickBfaaCallback(adSlot) {
			const bfaa = adSlot.getElement();
			const adHeight = bfaa.offsetHeight;

			bfaa.classList.add('sticky-bfaa');
			bfaa.style.top = calculateStickyTopPosition(adHeight);

			setTimeout(() => {
				bfaa.style.transition = `top ${this.stickyAnimationDuration / 1000}s ease`;
				bfaa.style.top = 0;
			}, 0);
		}

		function onUnstickBfaaCallback(adSlot) {
			const bfaa = adSlot.getElement();
			const adHeight = bfaa.offsetHeight;

			let animationFrameId = null;
			const setTopPosition = () => {
				bfaa.style.top = calculateStickyTopPosition(adHeight);
				animationFrameId = window.requestAnimationFrame(setTopPosition);
			};

			animationFrameId = window.requestAnimationFrame(setTopPosition);

			setTimeout(() => {
				window.cancelAnimationFrame(animationFrameId);
				bfaa.style.top = '';
				bfaa.style.transition = '';
				bfaa.classList.remove('sticky-bfaa');
			}, this.stickyAnimationDuration);
		}

		return {
			desktopNavbarWrapperSelector: '.wds-global-navigation-wrapper',
			handleNavbar: false,
			mobileNavbarWrapperSelector: '.global-navigation-mobile-wrapper',
			slotSibling: '.topic-header',
			slotsToEnable: [
				'BOTTOM_LEADERBOARD',
				'INCONTENT_BOXAD'
			],
			stickyAnimationDuration: 500,
			onStickBfaaCallback,
			onUnstickBfaaCallback
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
		this.theme = null;
	}

	/**
	 * Initializes the BFAA unit
	 */
	init(params) {
		this.params = params;

		if (!this.container) {
			return;
		}

		const uapTheme = (params.theme === 'hivi') ? hiviTheme : classicTheme;
		const videoSettings = new VideoSettings(params);

		UniversalAdPackage.init(params, this.config.slotsToEnable);
		this.videoSettings = videoSettings;
		this.container.style.backgroundColor = this.getBackgroundColor();
		this.container.classList.add('bfaa-template');
		this.theme = new uapTheme.BfaaTheme(this.adSlot, params);
		uapTheme.adIsReady({ adSlot: this.adSlot, videoSettings, params }).then(iframe => this.onAdReady(iframe));
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

	onAdReady(iframe) {
		document.body.style.paddingTop = iframe.parentElement.style.paddingBottom;
		document.body.classList.add('has-bfaa');

		if (this.config.handleNavbar) {
			this.setupNavbar();
		}

		if (UniversalAdPackage.isVideoEnabled(this.params)) {
			defer(UniversalAdPackage.loadVideoAd, this.videoSettings) // defers for proper rendering
				.then((video) => {
					this.theme.onVideoReady(video);
					return video;
				});
		}

		this.theme.onAdReady(iframe);
	}
}
