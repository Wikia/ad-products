function add(video) {
	const overlay = document.createElement('div');

	overlay.classList.add('pause-overlay');
	overlay.addEventListener('click', () => {
		if (video.isPaused()) {
			video.resume();
		} else {
			video.pause();
		}
	});

	video.container.appendChild(overlay);
}

export default {
	add
};
