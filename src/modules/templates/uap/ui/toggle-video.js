function add(video) {
	video.addEventListener('wikiaAdStarted', () => {
		video.container.classList.remove('hide');
	});

	video.addEventListener('wikiaAdCompleted', () => {
		video.container.classList.add('hide');
	});
}

export default {
	add
};
