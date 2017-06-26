const autoPlayLayout = [
		'progressBar',
		'pauseOverlay',
		'volumeControl',
		'toggleVideoWithAnimation'
	],
	defaultLayout = [
		'progressBar',
		'pauseOverlay',
		'volumeControl',
		'closeButton',
		'toggleVideoWithAnimation'
	],
	splitLayout = [
		'progressBar',
		'pauseOverlay',
		'volumeControl',
		'toggleVideo',
		'replayOverlay'
	],
	clickToPlaySplitLayout = [
		'progressBar',
		'pauseOverlay',
		'volumeControl',
		'toggleVideo',
		'replayOverlay',
		'closeButton'
	];

function selectTemplate(videoSettings) {
	let template = defaultLayout;

	if (!videoSettings.isAutoPlay() && videoSettings.isSplitLayout()) {
		template = clickToPlaySplitLayout;
	} else if (videoSettings.isSplitLayout()) {
		template = splitLayout;
	} else if (videoSettings.isAutoPlay()) {
		template = autoPlayLayout;
	}

	return template;
}

export default {
	autoPlayLayout,
	defaultLayout,
	splitLayout,
	selectTemplate
};
