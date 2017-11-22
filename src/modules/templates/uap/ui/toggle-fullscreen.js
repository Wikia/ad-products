
import { getIcon, FULLSCREEN_ON_ICON, FULLSCREEN_OFF_ICON } from './icons';

const FULLSCREEN_ON_CLASS_NAME = 'fullscreen-on';

function add(video, params, panel) {
	if (!params.fullscrenable) {
		return;
	}

	const toggleFullscreenButton = document.createElement('div');
	const container = panel ? panel.getContainer() : video.container;
	const onIcon = getIcon(FULLSCREEN_ON_ICON);
	const offIcon = getIcon(FULLSCREEN_OFF_ICON);

	onIcon.classList.add('fullscreen-on-icon');
	offIcon.classList.add('fullscreen-off-icon');
	toggleFullscreenButton.appendChild(onIcon);
	toggleFullscreenButton.appendChild(offIcon);

	toggleFullscreenButton.classList.add('toggle-fullscreen');
	toggleFullscreenButton.addEventListener('click', (event) => {
		video.toggleFullscreen();
		toggleFullscreenButton.classList.toggle(FULLSCREEN_ON_CLASS_NAME, video.isFullscreen());
		event.preventDefault();
	});

	container.appendChild(toggleFullscreenButton);
}

export default {
	add
};
