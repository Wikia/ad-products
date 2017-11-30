const overlayTimeout = 2000;

function add(video, container) {
	const overlay = document.createElement('div');

	overlay.classList.add('toggle-ui-overlay');
	overlay.addEventListener('click', () => {
		if (video.container.parentNode.classList.contains('mobile-porvata')) {
			video.container.classList.toggle('ui-visible');

			setTimeout(() => {
				video.container.classList.remove('ui-visible');
			}, overlayTimeout);
		} else {
			// TODO: give me click through url
			top.open('http://fandom.com', '_blank');
		}
	});

	container.appendChild(overlay);
}

export default {
	add
};
