function createVolumeControl() {
	const volume = document.createElement('div'),
		speaker = document.createElement('a');

	speaker.className = 'speaker';
	speaker.appendChild(document.createElement('span'));
	volume.className = 'volume-button hidden';

	volume.appendChild(speaker);
	volume.speaker = speaker;

	return volume;
}

function updateCurrentState(video, volumeControl) {
	if (video.isMuted() || video.isMobilePlayerMuted()) {
		volumeControl.speaker.classList.add('mute');
	} else {
		volumeControl.speaker.classList.remove('mute');
	}
}

function add(video) {
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

	video.container.appendChild(volumeControl);
}

export default {
	add
};
