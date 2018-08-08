import ToggleAnimation from '../../../interface/video/toggle-animation';
import { BigFancyAdTheme } from '../theme';
import { universalAdPackage } from '../../universal-ad-package';
import { VideoSettings } from '../../video-settings';

class BigFancyAdClassicTheme extends BigFancyAdTheme {
	onAdReady(iframe) {
		super.onAdReady(iframe);

		if (universalAdPackage.isVideoEnabled(this.params)) {
			const videoSettings = new VideoSettings(this.params);

			if (videoSettings.isSplitLayout()) {
				const theme = videoSettings.getParams().splitLayoutVideoPosition === 'right' ?
					'theme-split-right' :
					'theme-split-left';

				this.params.container.classList.add(theme);
			} else if (!videoSettings.isAutoPlay()) {
				document.body.classList.add('ctp-vuap-loaded');
			}
		}
	}
}

export class BfaaTheme extends BigFancyAdClassicTheme {
	onVideoReady(video) {
		if (!this.params.splitLayoutVideoPosition) {
			video.addEventListener('wikiaAdStarted', () => {
				this.recalculatePaddingTop(this.params.videoAspectRatio);
			});

			video.addEventListener('wikiaAdCompleted', () => {
				this.recalculatePaddingTop(this.params.aspectRatio);
			});
		}
	}

	recalculatePaddingTop(finalAspectRatio) {
		this.config.mainContainer.style.paddingTop = `${100 / finalAspectRatio}%`;

		this.container.style.height = `${this.container.offsetHeight}px`;
		// get offsetWidth from existing DOM element in order to force repaint
		this.container.style.height = `${this.container.offsetWidth / finalAspectRatio}px`;

		setTimeout(() => {
			// clear height so ad is responsive again
			this.container.style.height = '';
		}, ToggleAnimation.duration);
	}
}

export class BfabTheme extends BigFancyAdClassicTheme {

}
