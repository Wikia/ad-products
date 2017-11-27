import CloseButton from './close-button';
import PauseOverlay from './pause-overlay';
import ReplayOverlay from './replay-overlay';
import ProgressBar from './progress-bar';
import ToggleVideo from './toggle-video';
import ToggleAnimation from './toggle-animation';
import ToggleFullscreen from './toggle-fullscreen';
import VolumeControl from './volume-control';
import Panel from './panel';

const createBottomPanel = () => new Panel('bottom-panel', [
	ToggleFullscreen,
	VolumeControl
]);
const getTemplates = params => ({
	autoPlay: [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(params),
		ToggleAnimation
	],
	default: [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(params),
		CloseButton,
		ToggleAnimation
	],
	split: [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(params),
		ToggleVideo,
		ReplayOverlay
	],
	clickToPlaySplit: [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(params),
		ToggleVideo,
		ReplayOverlay,
		CloseButton
	]
});

export function selectTemplate(videoSettings) {
	const templates = getTemplates(videoSettings.getParams());
	let template = templates.default;

	if (!videoSettings.isAutoPlay() && videoSettings.isSplitLayout()) {
		template = templates.clickToPlaySplit;
	} else if (videoSettings.isSplitLayout()) {
		template = templates.split;
	} else if (videoSettings.isAutoPlay()) {
		template = templates.autoPlay;
	}

	return template;
}
