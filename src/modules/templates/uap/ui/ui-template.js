import CloseButton from './close-button';
import PauseOverlay from './pause-overlay';
import ReplayOverlay from './replay-overlay';
import ProgressBar from './progress-bar';
import ToggleAnimation from './toggle-animation';
import ToggleFullscreen from './toggle-fullscreen';
import ToggleUI from './toggle-ui';
import ToggleVideo from './toggle-video';
import VolumeControl from './volume-control';
import Panel from './panel';

const createBottomPanel = ({ theme = null }) => {
	const isHiVi = theme === 'hivi';
	let panelClassName = 'bottom-panel';

	if (isHiVi) {
		panelClassName += ' dynamic-panel';
	}

	return new Panel(panelClassName, [
		isHiVi ? VolumeControl : null,
		VolumeControl,
		isHiVi ? ToggleFullscreen : null
	]);
};

const getTemplates = params => ({
	'auto-play': [
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
	'click-to-play-split': [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(params),
		ToggleVideo,
		ReplayOverlay,
		CloseButton
	],
	hivi: [
		ProgressBar,
		createBottomPanel(params),
		ToggleVideo,
		ToggleUI,
		ReplayOverlay,
		//ToggleAnimation
	]
});

export function selectTemplate(videoSettings) {
	const params = videoSettings.getParams(),
		templates = getTemplates(params);

	let template = 'default';

	if (params.theme === 'hivi') {
		template = 'hivi';
	} else
	if (!videoSettings.isAutoPlay() && videoSettings.isSplitLayout()) {
		template = 'click-to-play-split';
	} else if (videoSettings.isSplitLayout()) {
		template = 'split';
	} else if (videoSettings.isAutoPlay()) {
		template = 'auto-play';
	}

	params.container.classList.add(`theme-${template}`);

	return templates[template];
}
