function add(video, container, params) {
	const isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;
	const onMouseEnter = () => {
		video.setVolume(1, true);
		if (!video.isPlaying()) {
			video.resume();
		}
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
			params.container.addEventListener('mouseenter', onMouseEnter);
			params.container.addEventListener('mouseleave', onMouseLeave);
			video.addEventListener('wikiaVolumeChangeClicked', () => {
				params.container.removeEventListener('mouseenter', onMouseEnter);
				params.container.removeEventListener('mouseleave', onMouseLeave);
			});
		});
	}
}

export default {
	add
};
