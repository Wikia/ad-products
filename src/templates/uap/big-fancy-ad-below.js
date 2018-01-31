import { context, utils } from '@wikia/ad-engine';

import { universalAdPackage } from './universal-ad-package';
import { VideoSettings } from './video-settings';
import * as classicTheme from './themes/classic';
import * as hiviTheme from './themes/hivi';

export class BigFancyAdBelow {
	static getName() {
		return 'bfab';
	}

	static getDefaultConfig() {
		return {
			onInit: () => {}
		};
	}

	/**
	 * Constructor
	 *
	 * @param {object} adSlot
	 */
	constructor(adSlot) {
		this.adSlot = adSlot;
		this.config = context.get('templates.bfab');
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

		const uapTheme = (this.params.theme === 'hivi') ? hiviTheme : classicTheme;

		universalAdPackage.initSlot(params);

		this.container.classList.add('bfab-template');
		this.videoSettings = new VideoSettings(params);
		this.theme = new uapTheme.BfabTheme(this.adSlot, this.params);

		uapTheme.adIsReady({
			adSlot: this.adSlot,
			videoSettings: this.videoSettings,
			params: this.params
		}).then(iframe => this.onAdReady(iframe));

		this.config.onInit(this.adSlot, this.params, this.config);
	}

	async onAdReady(iframe) {
		this.theme.onAdReady(iframe);

		if (universalAdPackage.isVideoEnabled(this.params)) {
			const video = await utils.defer(
				universalAdPackage.loadVideoAd,
				this.videoSettings
			);

			this.theme.onVideoReady(video);
		}
	}
}
