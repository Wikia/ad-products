
import { createIcon, icons } from './icons';

function add(video, container) {
	const toggleFullscreenButton = document.createElement('div');
	const onIcon = createIcon(icons.FULLSCREEN_ON);
	const offIcon = createIcon(icons.FULLSCREEN_OFF);

	onIcon.classList.add('fullscreen-on-icon');
	offIcon.classList.add('fullscreen-off-icon');
	toggleFullscreenButton.appendChild(onIcon);
	toggleFullscreenButton.appendChild(offIcon);

	toggleFullscreenButton.classList.add('toggle-fullscreen');
	toggleFullscreenButton.addEventListener('click', () => {
		video.toggleFullscreen();
	});
	video.addEventListener('wikia.fullscreenChange', () => {
		toggleFullscreenButton.classList.toggle('fullscreen-on', video.isFullscreen());
	});

	container.appendChild(toggleFullscreenButton);
}

export default {
	add
};
