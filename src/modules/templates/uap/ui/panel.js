export default class Panel {
	constructor(className, uiElements) {
		this.uiElements = uiElements;
		this.panelContainer = document.createElement('div');
		this.panelContainer.className = className;
	}

	getClassName() {
		return this.panelContainer.className;
	}

	getContainer() {
		return this.panelContainer;
	}

	add(video, params, panel) {
		const container = panel ? panel.getContainer() : video.container;
		this.uiElements.forEach((uiElement) => {
			uiElement.add(video, params, this);
		});
		container.appendChild(this.panelContainer);
	}
}
