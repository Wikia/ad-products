import { createIcon, icons } from './icons';

function add(video, container) {
	const pauseButton = document.createElement('div'),
		pauseIcon = createIcon(icons.PAUSE),
		playIcon = createIcon(icons.PLAY);

	playIcon.classList.add('play-icon');
	pauseIcon.classList.add('pause-icon');
	pauseButton.appendChild(playIcon);
	pauseButton.appendChild(pauseIcon);

	pauseButton.classList.add('play-pause-button');
	pauseButton.addEventListener('click', () => {
		if (video.isPaused()) {
			video.resume();
		} else {
			video.pause();
		}
	});
	video.addEventListener('pause', () => {
		pauseButton.classList.add('is-paused');
	});
	video.addEventListener('resume', () => {
		pauseButton.classList.remove('is-paused');
	});
	video.addEventListener('start', () => {
		pauseButton.classList.remove('is-paused');
	});

	container.appendChild(pauseButton);
}

export default {
	add
};
