const replayOverlayClass = 'replay-overlay';

function add(video, params) {
	const overlay = document.createElement('div');

	if (params.splitLayoutVideoPosition === 'right') {
		overlay.style.right = 0;
	}

	overlay.classList.add(replayOverlayClass);
	overlay.addEventListener('click', () => video.play());

	if (!params.autoPlay) {
		showOverlay(overlay, params);
	}

	video.addEventListener('wikiaAdCompleted', () => {
		showOverlay(overlay, params);
	});


	video.container.parentElement.insertBefore(overlay, video.container);
}

function showOverlay(overlay, params) {
	overlay.style.width = overlay.style.width || getOverlayWidth(params);
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
	add
};
