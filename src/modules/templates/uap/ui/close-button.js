function add(video) {
	const closeButton = document.createElement('div');

	closeButton.classList.add('close-ad');
	closeButton.addEventListener('click', (event) => {
		video.stop();
		event.preventDefault();
	});

	video.container.appendChild(closeButton);
}

export default {
	add
};
