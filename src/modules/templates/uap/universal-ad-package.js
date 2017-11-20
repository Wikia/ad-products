import { throttle } from 'ad-engine/src/utils/throttle';
import Context from 'ad-engine/src/services/context-service';
import Porvata from 'ad-engine/src/video/player/porvata/porvata';
import SlotService from 'ad-engine/src/services/slot-service';

import VideoInterface from './ui/video-interface';
import UITemplate from './ui/ui-template';

let uapId = 'none',
	uapType = 'uap';

function getVideoSize(slot, params, videoSettings) {
	const width = videoSettings.isSplitLayout() ? params.videoPlaceholderElement.offsetWidth : slot.clientWidth,
		height = width / params.videoAspectRatio;

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
	const params = videoSettings.getParams(),
		template = UITemplate.selectTemplate(videoSettings);

	params.container = slotContainer;
	params.autoPlay = videoSettings.isAutoPlay();
	videoSettings.updateParams(params);

	return Porvata.inject(params)
		.then((video) => {
			video.container.style.position = 'relative';
			VideoInterface.setup(video, template, {
				autoPlay: videoSettings.isAutoPlay(),
				image: imageContainer,
				container: slotContainer,
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
	const params = videoSettings.getParams(),
		adSlot = SlotService.getBySlotName(params.slotName),
		slotContainer = document.getElementById(adSlot.getId()),
		imageContainer = slotContainer.querySelector('div:last-of-type'),
		size = getVideoSize(slotContainer, params, videoSettings);

	document.body.classList.add('vuap-loaded');

	params.vastTargeting = {
		passback: getType()
	};
	params.width = size.width;
	params.height = size.height;
	videoSettings.updateParams(params);

	function recalculateVideoSize(video) {
		return () => {
			const currentSize = getVideoSize(slotContainer, params, videoSettings);
			video.resize(currentSize.width, currentSize.height);
		};
	}

	return loadPorvata(videoSettings, slotContainer, imageContainer)
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
}

function getType() {
	return uapType;
}

function setType(type) {
	uapType = type;
}

export default {
	init(params, slotsToEnable = []) {
		let adProduct = 'uap';

		if (this.isVideoEnabled(params)) {
			adProduct = 'vuap';
		}

		params.adProduct = params.adProduct || adProduct;

		setUapId(params.uap);
		setType(params.adProduct);

		Object.keys(Context.get('slots')).forEach((slotId) => {
			Context.set(`slots.${slotId}.targeting.uap`, getUapId());
		});

		if (getType() !== 'abcd') {
			slotsToEnable.forEach((slotName) => {
				SlotService.enable(slotName);
			});
		}
	},
	getType,
	getUapId,
	isVideoEnabled(params) {
		const triggersArrayIsNotEmpty = Array.isArray(params.videoTriggers) && params.videoTriggers.length > 0;

		return !!params.videoAspectRatio && (params.videoTriggerElement || triggersArrayIsNotEmpty);
	},
	loadVideoAd,
	setType,
	setUapId
};
