import CloseButton from './close-button';
import PauseOverlay from './pause-overlay';
import ReplayOverlay from './replay-overlay';
import ProgressBar from './progress-bar';
import ToggleVideo from './toggle-video';
import ToggleAnimation from './toggle-animation';
import VolumeControl from './volume-control';
import Panel from './panel';

const createBottomPanel = (...elements) => new Panel('bottom-panel', elements);
const autoPlayLayout = [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(VolumeControl),
		ToggleAnimation
	],
	defaultLayout = [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(VolumeControl),
		CloseButton,
		ToggleAnimation
	],
	splitLayout = [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(VolumeControl),
		ToggleVideo,
		ReplayOverlay
	],
	clickToPlaySplitLayout = [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(VolumeControl),
		ToggleVideo,
		ReplayOverlay,
		CloseButton
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
