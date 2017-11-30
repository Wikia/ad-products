const overlayTimeout = 5000;

function add(video, container) {
	let timeout = null;

	const isMobile = video.container.parentNode.classList.contains('mobile-porvata'),
		overlay = document.createElement('div'),
		setAutomaticToggle = () => {
			timeout = setTimeout(() => {
				if (video.isPlaying()) {
					video.container.classList.remove('ui-visible');
				}
			}, overlayTimeout);
		};

	overlay.classList.add('toggle-ui-overlay');
	if (isMobile) {
		overlay.addEventListener('click', () => {
			video.container.classList.toggle('ui-visible');

			clearTimeout(timeout);
			setAutomaticToggle();
		});
		video.addEventListener('resume', setAutomaticToggle);
	} else {
		video.container.addEventListener('mouseenter', () => {
			video.container.classList.add('ui-visible');
		});
		video.container.addEventListener('mouseleave', () => {
			video.container.classList.remove('ui-visible');
		});
		overlay.addEventListener('click', () => {
			// TODO: give me click through url
			top.open('http://fandom.com', '_blank');
		});
	}

	container.appendChild(overlay);
}

export default {
	add
};
