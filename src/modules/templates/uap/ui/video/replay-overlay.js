const replayOverlayClass = 'replay-overlay';

function add(video, container, params) {
	const overlay = document.createElement('div');

	overlay.classList.add(replayOverlayClass);
	overlay.addEventListener('click', () => video.play());

	if (!params.autoPlay) {
		showOverlay(overlay, params);
	}

	video.addEventListener('wikiaAdCompleted', () => {
		showOverlay(overlay, params);
	});

	if(video.params.theme && video.params.theme == "hivi") {
		container = video.params.thumbnail;
		container.appendChild(overlay);
	} else {
		container.parentElement.insertBefore(overlay, container);
	}
}

function showOverlay(overlay, params) {
	if(!params.splitLayoutVideoPosition) {
		overlay.style.width = overlay.style.width || getOverlayWidth(params);
	}
	// make overlay visible after ad finishes
	overlay.style.display = 'block';
}
/**
 * Basing on video width and total ad width compute width (in %)
 * of overlay to make it responsive.
 *
 * offsetWidth won't work in case video container is hidden.
 * @param params
 * @return string in form '55%'
 */
function getOverlayWidth(params) {
	const adWidth = params.container.offsetWidth,
		videoWidth = params.hideWhenPlaying.offsetWidth;

	return `${100 * videoWidth / adWidth}%`;
}

export default {
	name: "replay-overlay",
	add
};
