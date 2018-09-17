import { context, utils } from '@wikia/ad-engine';
import { universalAdPackage } from './universal-ad-package';
import { VideoSettings } from './video-settings';
import { SLIDE_OUT_TIME } from './constants';
import * as classicTheme from './themes/classic';
import * as hiviTheme from './themes/hivi';

export class BigFancyAdTwitch {
	static getName() {
		return 'bfat';
	}

	static getDefaultConfig() {
		return {
			desktopNavbarWrapperSelector: '.wds-global-navigation-wrapper',
			mobileNavbarWrapperSelector: '.global-navigation-mobile-wrapper',
			mainContainer: document.body,
			handleNavbar: false,
			autoPlayAllowed: true,
			defaultStateAllowed: true,
			fullscreenAllowed: true,
			stickinessAllowed: true,
			slotSibling: '.topic-header',
			slotsToEnable: [
				'bottom_leaderboard',
				'incontent_boxad'
			],
			onInit: () => {},
			onBeforeStickBfaaCallback: () => {},
			onAfterStickBfaaCallback: () => {},
			onBeforeUnstickBfaaCallback: () => {},
			onAfterUnstickBfaaCallback: () => {},
			moveNavbar(offset, time = SLIDE_OUT_TIME) {
				const navbarElement = document.querySelector('body > nav.navigation');

				if (navbarElement) {
					navbarElement.style.transition = (
						offset ? '' : `top ${time}ms ${universalAdPackage.CSS_TIMING_EASE_IN_CUBIC}`
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
		this.config = context.get('templates.bfat');
		this.container = document.getElementById(this.adSlot.getSlotName());
		this.videoSettings = null;
		this.theme = null;
	}

	/**
		 * Initializes the BFAT unit
		 */
	init(params) {
		this.params = params;

		if (!this.container) {
			return;
		}

		// TODO Remove this hack when all mobile apps support autoplay and fullscreen
		if (!this.config.autoPlayAllowed) {
			this.params.autoPlay = false;
			this.params.resolvedStateAutoPlay = false;
		}
		this.params.fullscreenAllowed = this.config.fullscreenAllowed;
		// TODO: End of hack

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
		this.config.mainContainer.style.paddingTop = iframe.parentElement.style.paddingBottom;
		this.config.mainContainer.classList.add('has-bfaa');

		if (this.config.handleNavbar) {
			this.setupNavbar();
		}

		if (document.hidden) {
			await utils.once(window, 'visibilitychange');
		}

		this.theme.onAdReady(iframe);
		const twitch = universalAdPackage.loadTwitchAd(iframe, this.params);
	}
}
