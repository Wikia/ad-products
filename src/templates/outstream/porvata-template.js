import { events, Porvata, slotTweaker } from '@wikia/ad-engine';
import * as videoUserInterface from '../interface/video';

export const DEFAULT_VIDEO_ASPECT_RATIO = 640 / 360;
export const IMA_VPAID_INSECURE_MODE = 2;

export class PorvataTemplate {
	static getName() {
		return 'porvata';
	}

	static getDefaultConfig() {
		return {};
	}

	constructor(adSlot) {
		this.adSlot = adSlot;
	}

	init(params) {
		params.theme = 'hivi';
		params.blockOutOfViewportPausing = false;
		const slotName = this.adSlot.getSlotName();
		const isInsecureMode = params.vpaidMode === IMA_VPAID_INSECURE_MODE;

		if (!Porvata.isVideoAutoplaySupported()) {
			return this.adSlot.collapse();
		}

		if (isInsecureMode) {
			params.originalContainer = params.container;
			params.container = this.createVideoContainer(slotName);
		}

		slotTweaker.collapse(this.adSlot);

		return slotTweaker.makeResponsive(this.adSlot, DEFAULT_VIDEO_ASPECT_RATIO)
			.then(() => {
				return Porvata.inject(params)
					.then(video => this.onReady(video, params));
			});
	}

	onReady(video, params) {
		const slotElement = this.adSlot.getElement();
		const template = videoUserInterface.selectTemplate(video.videoSettings);
		const isInsecureMode = params.vpaidMode === IMA_VPAID_INSECURE_MODE;
		const videoContainer = params.container;

		if (isInsecureMode) {
			this.adjustVpaidPlayer(video, videoContainer);
		}

		slotElement.classList.add('porvata-outstream');

		video.addEventListener('loaded', () => {
			video.container.classList.remove('hide');
		});

		window.addEventListener('resize', () => {
			// TODO: Make sure floater and resize works
			// if (!(video.isFloating && video.isFloating())) {
			const slotWidth = slotElement.clientWidth;
			video.resize(slotWidth, slotWidth / DEFAULT_VIDEO_ASPECT_RATIO);
		});

		events.once(events.PAGE_CHANGE_EVENT, () => {
			video.destroy();
		});

		videoUserInterface.setup(video, template, {
			container: videoContainer,
			slotName: params.slotName
		});

		return video;
	}

	adjustVpaidPlayer(video, container) {
		const videoPlayer = container.querySelector('.video-player');

		video.addEventListener('loaded', () => {
			const ad = video.ima.getAdsManager().getCurrentAd();

			if (ad && Porvata.isVpaid(ad.getContentType) || '') {
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
