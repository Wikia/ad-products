function add(video) {
	const muteVideo = () => {
		setTimeout(() => {
			video.setVolume(0);
		});
	};

	video.addEventListener('loaded', muteVideo);
	video.addEventListener('start', muteVideo);
}

export default {
	add
};
