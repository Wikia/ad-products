import { context, utils } from '@wikia/ad-engine';

import { universalAdPackage } from './universal-ad-package';
import { VideoSettings } from './video-settings';
import * as classicTheme from './themes/classic';
import * as hiviTheme from './themes/hivi';

export class BigFancyAdAbove {
	static getName() {
		return 'bfaa';
	}

	static getDefaultConfig() {
		function onStickBfaaCallback(adSlot) {
			adSlot.getElement().classList.add('sticky-bfaa');
		}

		function onUnstickBfaaCallback(adSlot) {
			adSlot.getElement().classList.remove('sticky-bfaa');
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
			onInit: () => {},
			onStickBfaaCallback,
			onUnstickBfaaCallback,
			moveNavbar: () => {}
		};
	}

	/**
	 * Constructor
	 *
	 * @param {object} adSlot
	 */
	constructor(adSlot) {
		this.adSlot = adSlot;
		this.config = context.get('templates.bfaa');
		this.container = document.getElementById(this.adSlot.getId());
		this.videoSettings = null;
		this.theme = null;
	}

	/**
	 * Initializes the BFAA unit
	 */
	async init(params) {
		this.params = params;

		if (!this.container) {
			return;
		}

		const uapTheme = (this.params.theme === 'hivi') ? hiviTheme : classicTheme;

		universalAdPackage.init(this.params, this.config.slotsToEnable);
		this.videoSettings = new VideoSettings(this.params);
		this.container.style.backgroundColor = this.getBackgroundColor();
		this.container.classList.add('bfaa-template');
		this.theme = new uapTheme.BfaaTheme(this.adSlot, this.params);
		this.onAdReady(await uapTheme.adIsReady({
			adSlot: this.adSlot,
			videoSettings: this.videoSettings,
			params: this.params
		}));

		this.config.onInit(this.adSlot, this.params, this.config);
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

	async onAdReady(iframe) {
		document.body.style.paddingTop = iframe.parentElement.style.paddingBottom;
		document.body.classList.add('has-bfaa');

		if (this.config.handleNavbar) {
			this.setupNavbar();
		}

		if (universalAdPackage.isVideoEnabled(this.params)) {
			const video = await utils.defer(
				universalAdPackage.loadVideoAd,
				this.videoSettings
			); // defers for proper rendering

			this.theme.onVideoReady(video);
		}

		this.theme.onAdReady(iframe);
	}
}
