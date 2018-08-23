import { context, events, Porvata, slotTweaker } from '@wikia/ad-engine';
import * as videoUserInterface from '../interface/video';
import { getTranslation } from '../../common/i18n';

export const DEFAULT_VIDEO_ASPECT_RATIO = 640 / 360;
export const IMA_VPAID_INSECURE_MODE = 2;

export class PorvataTemplate {
	static getName() {
		return 'porvata3';
	}

	static getDefaultConfig() {
		return {
			isFloatingEnabled: true,
			inViewportOffsetTop: 0,
			inViewportOffsetBottom: 0
		};
	}

	constructor(adSlot) {
		this.adSlot = adSlot;
		this.config = context.get('templates.porvata3');
	}

	init(params) {
		const slotName = this.adSlot.getSlotName();

		if (!this.adSlot.getElement().classList.contains('ad-slot')) {
			this.adSlot.getElement().classList.add('ad-slot');
		}

		this.adSlot.getElement().classList.add('porvata3');
		this.adSlot.getElement().setAttribute('data-label', getTranslation('labels', 'advertisement'));

		this.isInsecureMode = params.vpaidMode === IMA_VPAID_INSECURE_MODE;

		if (!Porvata.isVideoAutoplaySupported()) {
			return this.adSlot.collapse();
		}

		if (this.isInsecureMode) {
			params.originalContainer = params.container;
			params.container = this.createVideoContainer(slotName);
		}

		slotTweaker.collapse(this.adSlot);

		return slotTweaker.makeResponsive(this.adSlot, DEFAULT_VIDEO_ASPECT_RATIO)
			.then(() => Porvata.inject(params).then(video => this.onReady(video, params)));
	}

	onReady(video, params) {
		const slotElement = this.adSlot.getElement();
		const template = videoUserInterface.selectTemplate(video.videoSettings);
		const videoContainer = params.container;

		if (this.isInsecureMode) {
			this.adjustVpaidPlayer(video, videoContainer);
		}

		slotElement.classList.add('porvata-outstream');

		video.addEventListener('loaded', () => {
			video.container.classList.remove('hide');
		});

		window.addEventListener('resize', () => {
			if (!video.isFloating) {
				const slotWidth = slotElement.clientWidth;
				video.resize(slotWidth, slotWidth / DEFAULT_VIDEO_ASPECT_RATIO);
			}
		});

		this.handleSlotStatus(video);

		events.once(events.PAGE_CHANGE_EVENT, () => {
			video.destroy();
		});

		videoUserInterface.setup(video, template, {
			container: videoContainer,
			inViewportOffsetTop: this.config.inViewportOffsetTop,
			inViewportOffsetBottom: this.config.inViewportOffsetBottom,
			isFloatingEnabled: this.config.isFloatingEnabled && params.enableInContentFloating,
			slotName: params.slotName
		});

		return video;
	}

	handleSlotStatus(video) {
		video.addEventListener('wikiaAdsManagerLoaded', () => {
			this.adSlot.success();
		});

		video.addEventListener('wikiaEmptyAd', () => {
			this.adSlot.collapse();
		});
	}

	adjustVpaidPlayer(video, container) {
		const videoPlayer = container.querySelector('.video-player');

		video.addEventListener('loaded', () => {
			const ad = video.ima.getAdsManager().getCurrentAd();

			if (ad && Porvata.isVpaid(ad.getContentType() || '')) {
				container.classList.add('vpaid-enabled');
				videoPlayer.classList.remove('hide');
			}
		});

		video.addEventListener('allAdsCompleted', () => {
			container.classList.add('hide');
		});
	}

	createVideoContainer() {
		const container = document.createElement('div');
		const displayWrapper = document.createElement('div');

		container.classList.add('video-overlay');
		displayWrapper.classList.add('video-display-wrapper');

		container.appendChild(displayWrapper);
		this.adSlot.getElement().appendChild(container);

		return displayWrapper;
	}
}
