function add(video, container) {
	const closeButton = document.createElement('div');

	closeButton.classList.add('close-ad');
	closeButton.addEventListener('click', (event) => {
		if (video.isFullscreen()) {
			video.toggleFullscreen();
		}

		video.stop();
		event.preventDefault();
	});

	container.appendChild(closeButton);
}

export default {
	add
};
