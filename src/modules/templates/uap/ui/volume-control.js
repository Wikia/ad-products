import { createIcon, icons } from './icons';

function createVolumeControl() {
	const volume = document.createElement('div'),
		offIcon = createIcon(icons.VOLUME_OFF, ['volume-off-icon', 'porvata-icon', 'porvata-off-icon']),
		onIcon = createIcon(icons.VOLUME_ON, ['volume-on-icon', 'porvata-icon', 'porvata-on-icon']);

	volume.className = 'volume-button porvata-switchable-icon hidden';
	volume.appendChild(offIcon);
	volume.appendChild(onIcon);

	return volume;
}

function updateCurrentState(video, volumeControl) {
	if (video.isMuted() || video.isMobilePlayerMuted()) {
		volumeControl.classList.add('is-on');
	} else {
		volumeControl.classList.remove('is-on');
	}
}

function add(video, container) {
	const volumeControl = createVolumeControl();

	video.addEventListener('wikiaVolumeChange', () => {
		updateCurrentState(video, volumeControl);
	});

	video.addEventListener('wikiaAdStarted', () => {
		updateCurrentState(video, volumeControl);
		volumeControl.classList.remove('hidden');
	});

	volumeControl.addEventListener('click', (e) => {
		video.volumeToggle();
		e.preventDefault();
	});

	container.appendChild(volumeControl);
}

export default {
	add
};
