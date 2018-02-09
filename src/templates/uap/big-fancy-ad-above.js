import { context, utils } from '@wikia/ad-engine';

import {
	CSS_CLASSNAME_FADE_IN_ANIMATION,
	CSS_CLASSNAME_SLIDE_OUT_ANIMATION,
	CSS_CLASSNAME_STICKY_BFAA,
} from './constants';
import { universalAdPackage } from './universal-ad-package';
import { VideoSettings } from './video-settings';
import { animate } from './ui/animate';
import * as classicTheme from './themes/classic';
import * as hiviTheme from './themes/hivi';

export class BigFancyAdAbove {
	static getName() {
		return 'bfaa';
	}

	static getDefaultConfig() {
		function onStickBfaaCallback(adSlot) {
			adSlot.getElement().classList.add(CSS_CLASSNAME_STICKY_BFAA);
		}

		async function onUnstickBfaaCallback(adSlot) {
			// Animation time is defined also in CSS, remember to change it in both places
			await animate(adSlot, CSS_CLASSNAME_SLIDE_OUT_ANIMATION, 600);
			adSlot.getElement().classList.remove(CSS_CLASSNAME_STICKY_BFAA);
			await animate(adSlot, CSS_CLASSNAME_FADE_IN_ANIMATION, 400);
		}

		return {
			desktopNavbarWrapperSelector: '.wds-global-navigation-wrapper',
			mobileNavbarWrapperSelector: '.global-navigation-mobile-wrapper',
			handleNavbar: false,
			slotSibling: '.topic-header',
			slotsToEnable: [
				'BOTTOM_LEADERBOARD',
				'INCONTENT_BOXAD'
			],
			onInit: () => {},
			onStickBfaaCallback,
			onUnstickBfaaCallback,
			moveNavbar(offset) {
				const navbarElement = document.querySelector('body > nav.navigation');

				if (navbarElement) {
					navbarElement.style.transition = (
						offset ? '' : `top 600ms ${universalAdPackage.CSS_TIMING_EASE_IN_CUBIC}`
					);
					navbarElement.style.top = (offset ? `${offset}px` : '');
				}
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
		this.config = context.get('templates.bfaa');
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

		const uapTheme = (this.params.theme === 'hivi') ? hiviTheme : classicTheme;

		universalAdPackage.init(this.params, this.config.slotsToEnable);
		this.videoSettings = new VideoSettings(this.params);
		this.container.style.backgroundColor = this.getBackgroundColor();
		this.container.classList.add('bfaa-template');
		this.theme = new uapTheme.BfaaTheme(this.adSlot, this.params);

		uapTheme.adIsReady({
			adSlot: this.adSlot,
			videoSettings: this.videoSettings,
			params: this.params
		}).then(iframe => this.onAdReady(iframe));

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

		if (document.hidden) {
			await utils.once(window, 'visibilitychange');
		}

		this.theme.onAdReady(iframe);

		if (universalAdPackage.isVideoEnabled(this.params)) {
			const video = await utils.defer(
				universalAdPackage.loadVideoAd,
				this.videoSettings
			); // defers for proper rendering

			this.theme.onVideoReady(video);
		}
	}
}
