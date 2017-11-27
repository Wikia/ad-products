
import { createIcon, icons } from './icons';

const FULLSCREEN_ON_CLASS_NAME = 'fullscreen-on';

function add(video, container, params) {
	if (!params.fullscrenable) {
		// TODO: uncomment before merge
		// return;
	}

	const toggleFullscreenButton = document.createElement('div');
	const onIcon = createIcon(icons.FULLSCREEN_ON);
	const offIcon = createIcon(icons.FULLSCREEN_OFF);

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
