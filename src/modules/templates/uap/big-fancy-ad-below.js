import defer from 'ad-engine/src/utils/defer';

import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';
import * as classicTheme from './themes/classic';
import * as hiviTheme from './themes/hivi';

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

		const uapTheme = (params.theme === 'hivi') ? hiviTheme : classicTheme;
		const videoSettings = new VideoSettings(params);

		this.container.classList.add('bfab-template');
		this.videoSettings = videoSettings;
		this.theme = new uapTheme.BfabTheme(this.adSlot, params);
		uapTheme.adIsReady({ adSlot: this.adSlot, videoSettings, params }).then(iframe => this.onAdReady(iframe));
	}

	onAdReady(iframe) {
		if (UniversalAdPackage.isVideoEnabled(this.params)) {
			defer(UniversalAdPackage.loadVideoAd, this.videoSettings)
				.then((video) => {
					this.theme.onVideoReady(video);
					return video;
				});
		}

		this.theme.onAdReady(iframe);
	}
}
