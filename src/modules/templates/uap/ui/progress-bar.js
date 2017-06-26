import SlotTweaker from 'ad-engine/services/slot-tweaker';

function add(video) {
	const progressBar = document.createElement('div'),
		currentTime = document.createElement('div');

	progressBar.classList.add('progress-bar');
	currentTime.classList.add('current-time');

	progressBar.appendChild(currentTime);

	progressBar.pause = () => {
		currentTime.style.width = `${(currentTime.offsetWidth / progressBar.offsetWidth * 100)}%`;
	};
	progressBar.reset = () => {
		currentTime.style.transitionDuration = '';
		currentTime.style.width = '0';
	};
	progressBar.start = () => {
		const remainingTime = video.getRemainingTime();

		if (remainingTime) {
			currentTime.style.transitionDuration = `${remainingTime}s`;
			SlotTweaker.forceRepaint(currentTime);
			currentTime.style.width = '100%';
		} else {
			currentTime.style.width = '0';
		}
	};

	video.addEventListener('wikiaAdPlay', progressBar.start);
	video.addEventListener('wikiaAdCompleted', progressBar.reset);
	video.addEventListener('wikiaAdPause', progressBar.pause);

	video.container.appendChild(progressBar);
}

export default {
	add
};
