import Client from 'ad-engine/src/utils/client';
import CloseButton from './close-button';
import LearnMore from './learn-more';
import PauseControl from './pause-control';
import PauseOverlay from './pause-overlay';
import ProgressBar from './progress-bar';
import ReplayOverlay from './replay-overlay';
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
		isHiVi ? PauseControl : null,
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
	'default': [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(params),
		CloseButton,
		ToggleAnimation
	],
	'split-left': [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(params),
		ToggleVideo,
		ReplayOverlay
	],
	'split-right': [
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
		params.videoPlaceholderElement ? ToggleVideo : ToggleAnimation,
		ToggleUI,
		LearnMore,
		params.videoPlaceholderElement ? ReplayOverlay : null
	]
});

export function selectTemplate(videoSettings) {
	const params = videoSettings.getParams(),
		templates = getTemplates(params);

	let template = 'default';

	if (params.theme === 'hivi') {
		template = 'hivi';
	} else if (!videoSettings.isAutoPlay() && videoSettings.isSplitLayout()) {
		template = 'click-to-play-split';
	} else if (videoSettings.isSplitLayout()) {
		template = params.splitLayoutVideoPosition === 'right' ? 'split-right' : 'split-left';
	} else if (videoSettings.isAutoPlay()) {
		template = 'auto-play';
	}

	params.container.classList.add(`theme-${template}`);
	if (params.isDarkTheme) {
		params.container.classList.add('theme-dark');
	}
	if (Client.isSmartphone() || Client.isTablet()) {
		params.container.classList.add('theme-mobile');
	}

	return templates[template];
}
