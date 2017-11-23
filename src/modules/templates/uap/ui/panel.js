export default class Panel {
	constructor(className, uiElements) {
		this.uiElements = uiElements;
		this.panelContainer = document.createElement('div');
		this.panelContainer.className = className;
	}

	add(video, container, params) {
		this.uiElements.forEach((uiElement) => {
			uiElement.add(video, this.panelContainer, params);
		});
		container.appendChild(this.panelContainer);
	}
}
