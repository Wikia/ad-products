function add(video, container, params) {
	const isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;
	const onMouseEnter = () => {
		video.setVolume(1, true);
	};
	const onMouseLeave = () => {
		video.setVolume(0, true);
	};
	const muteVideo = () => {
		setTimeout(() => {
			video.setVolume(0);
		});
	};

	video.addEventListener('loaded', muteVideo);
	video.addEventListener('start', muteVideo);

	if (!isTouchDevice) {
		video.addEventListener('loaded', () => {
			container.addEventListener('mouseenter', onMouseEnter);
			container.addEventListener('mouseleave', onMouseLeave);
			video.addEventListener('wikiaVolumeChangeClicked', () => {
				container.removeEventListener('mouseenter', onMouseEnter);
				container.removeEventListener('mouseleave', onMouseLeave);
			});
		});
	}
}

export default {
	add
};
