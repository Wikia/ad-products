'use strict';

import Context from 'ad-engine/services/context-service';
import Porvata from 'ad-engine/video/player/porvata/porvata'
import SlotService from 'ad-engine/services/slot-service';
import VideoInterface from './ui/video-interface';
import UITemplate from './ui/ui-template';
import { throttle } from 'ad-engine/utils/throttle';

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

			video.addEventListener('allAdsCompleted', () => {
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

	params.width = size.width;
	params.height = size.height;
	params.vastTargeting = {
		src: params.src,
		pos: params.slotName,
		passback: 'vuap',
		uap: adSlot.getTargeting().uap
	};

	document.body.classList.add('vuap-loaded');

	return loadPorvata(videoSettings, slotContainer, imageContainer)
		.then((video) => {
			function playVideo() {
				const size = getVideoSize(slotContainer, params, videoSettings);

				video.play(size.width, size.height);
			}

			window.addEventListener('resize', throttle(() => {
				const size = getVideoSize(slotContainer, params, videoSettings);

				video.resize(size.width, size.height);
			}, 250));

			if (params.videoTriggerElement) {
				params.videoTriggerElement.addEventListener('click', playVideo);
			} else if (params.videoTriggers) {
				params.videoTriggers.forEach((trigger) => {
					trigger.addEventListener('click', playVideo);
				});
			}

			return video;
		});
}

export default {
	init(uapId) {
		Object.keys(Context.get('slots')).forEach((slotId) => {
			Context.set(`slots.${slotId}.targeting.uap`, uapId);
		});

		SlotService.enable('BOTTOM_LEADERBOARD');
		SlotService.enable('INCONTENT_BOXAD');
	},

	isVideoEnabled(params) {
		return !!params.videoAspectRatio && (params.videoTriggerElement || params.videoTriggers);
	},

	loadVideoAd
};
