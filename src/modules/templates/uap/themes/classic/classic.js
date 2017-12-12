import ToggleAnimation from '../../ui/video/toggle-animation';
import { BigFancyAdTheme } from '../theme';

export class BfaaTheme extends BigFancyAdTheme {
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

export class BfabTheme extends BigFancyAdTheme {

}