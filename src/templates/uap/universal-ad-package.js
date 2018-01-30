import { throttle } from 'lodash-es';
import { context, Porvata, slotService, utils } from '@wikia/ad-engine';
import * as videoUserInterface from './ui/video';

let uapId = 'none';
let uapType = 'uap';

function getVideoSize(slot, params, videoSettings) {
	const width = videoSettings.isSplitLayout() ? params.videoPlaceholderElement.offsetWidth : slot.clientWidth;
	const height = width / params.videoAspectRatio;

	return {
		width,
		height
	};
}

function adjustVideoAdContainer(params) {
	if (params.splitLayoutVideoPosition) {
		const videoAdContainer = params.container.querySelector('.video-player');

		videoAdContainer.classList.add(`video-player-${params.splitLayoutVideoPosition}`);
	}
}

function loadPorvata(videoSettings, slotContainer, imageContainer) {
	const params = videoSettings.getParams();
	const template = videoUserInterface.selectTemplate(videoSettings);

	params.autoPlay = videoSettings.isAutoPlay();
	videoSettings.updateParams(params);

	return Porvata.inject(params)
		.then((video) => {
			video.container.style.position = 'relative';
			videoUserInterface.setup(video, template, {
				autoPlay: videoSettings.isAutoPlay(),
				image: imageContainer,
				container: slotContainer,
				thumbnail: params.thumbnail,
				clickThroughURL: params.clickThroughURL,
				aspectRatio: params.aspectRatio,
				videoAspectRatio: params.videoAspectRatio,
				hideWhenPlaying: params.videoPlaceholderElement || params.image,
				splitLayoutVideoPosition: params.splitLayoutVideoPosition
			});

			video.addEventListener('wikiaAdCompleted', () => {
				video.reload();
			});

			adjustVideoAdContainer(params);

			return video;
		});
}

function loadVideoAd(videoSettings) {
	const params = videoSettings.getParams();
	const imageContainer = params.container.querySelector('div:last-of-type');
	const size = getVideoSize(params.container, params, videoSettings);

	params.vastTargeting = {
		passback: getType()
	};
	params.width = size.width;
	params.height = size.height;
	videoSettings.updateParams(params);

	function recalculateVideoSize(video) {
		return () => {
			const currentSize = getVideoSize(params.container, params, videoSettings);
			video.resize(currentSize.width, currentSize.height);
		};
	}

	return loadPorvata(videoSettings, params.container, imageContainer)
		.then((video) => {
			window.addEventListener('resize', throttle(recalculateVideoSize(video), 250));

			if (params.videoTriggerElement) {
				params.videoTriggerElement.addEventListener('click', () => video.play());
			} else if (params.videoTriggers) {
				params.videoTriggers.forEach((trigger) => {
					trigger.addEventListener('click', () => video.play());
				});
			}

			return video;
		});
}

function getUapId() {
	return uapId;
}

function setUapId(id) {
	uapId = id;
	updateSlotsTargeting(id);
}

function getType() {
	return uapType;
}

function setType(type) {
	uapType = type;
}

function updateSlotsTargeting(id) {
	const slots = context.get('slots');
	Object.keys(slots).forEach((slotId) => {
		if (!slots[slotId].nonUapSlot) {
			context.set(`slots.${slotId}.targeting.uap`, id);
		}
	});
}

function enableSlots(slotsToEnable) {
	if (getType() !== 'abcd') {
		slotsToEnable.forEach((slotName) => {
			slotService.enable(slotName);
		});
	}
}

export const universalAdPackage = {
	init(params, slotsToEnable = []) {
		let adProduct = 'uap';

		if (this.isVideoEnabled(params)) {
			adProduct = 'vuap';
		}

		params.adProduct = params.adProduct || adProduct;

		setUapId(params.uap);
		setType(params.adProduct);
		enableSlots(slotsToEnable);

		const adSlot = slotService.getBySlotName(params.slotName);
		params.container = document.getElementById(adSlot.getId());

		if (params.isDarkTheme) {
			params.container.classList.add('is-dark');
		}
		if (params.isMobile) {
			params.container.classList.add('is-mobile-layout');
		}
		if (utils.client.isSmartphone() || utils.client.isTablet()) {
			params.container.classList.add('is-mobile-device');
		}
	},
	getType,
	getUapId,
	isVideoEnabled(params) {
		const triggersArrayIsNotEmpty = Array.isArray(params.videoTriggers) && params.videoTriggers.length > 0;

		return !!params.videoAspectRatio && (params.videoPlaceholderElement || triggersArrayIsNotEmpty);
	},
	loadVideoAd,
	setType,
	setUapId
};
