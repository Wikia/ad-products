
import { getIcon, FULLSCREEN_ON_ICON, FULLSCREEN_OFF_ICON } from './icons';

const FULLSCREEN_ON_CLASS_NAME = 'fullscreen-on';

export function add(video, params, panel) {
	const toggleFullscreenButton = document.createElement('div');
	const container = panel ? panel.getContainer() : video.container;
	const icons = {
		OFF: getIcon(FULLSCREEN_OFF_ICON),
		ON: getIcon(FULLSCREEN_ON_ICON)
	};

	icons.OFF.classList.add('fullscreen-off-icon');
	icons.ON.classList.add('fullscreen-on-icon');
	toggleFullscreenButton.classList.add('toggle-fullscreen');
	toggleFullscreenButton.appendChild(icons.OFF);
	toggleFullscreenButton.appendChild(icons.ON);
	toggleFullscreenButton.addEventListener('click', (event) => {
		video.toggleFullscreen();

		if (video.isFullscreen()) {
			toggleFullscreenButton.classList.add(FULLSCREEN_ON_CLASS_NAME);
		} else {
			toggleFullscreenButton.classList.remove(FULLSCREEN_ON_CLASS_NAME);
		}

		event.preventDefault();
	});

	container.appendChild(toggleFullscreenButton);
}
