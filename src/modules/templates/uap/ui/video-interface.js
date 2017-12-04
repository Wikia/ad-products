function setup(video, uiElements, params) {
	uiElements.forEach(element => {
		if (element) {
			element.add(video, video.container, params);
		}
	});
}

export default { setup };
