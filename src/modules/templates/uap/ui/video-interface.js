function setup(video, uiElements, params) {
	uiElements.forEach((element) => {
		element.add(video, params);
	});
}

export default { setup };
