import { utils } from '@wikia/ad-engine';
import CloseButton from './close-button';
import LearnMore from './learn-more';
import PauseControl from './pause-control';
import PauseOverlay from './pause-overlay';
import ProgressBar from './progress-bar';
import ReplayOverlay from './replay-overlay';
import ToggleAnimation from './toggle-animation';
import ToggleFullscreen from './toggle-fullscreen';
import ToggleThumbnail from './toggle-thumbnail';
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

const getTemplates = (params, videoSettings) => ({
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
	'split-left': [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(params),
		ToggleVideo,
		ReplayOverlay,
		!videoSettings.isAutoPlay() ? CloseButton : null
	],
	'split-right': [
		ProgressBar,
		PauseOverlay,
		createBottomPanel(params),
		ToggleVideo,
		ReplayOverlay,
		!videoSettings.isAutoPlay() ? CloseButton : null
	],
	hivi: [
		ProgressBar,
		createBottomPanel(params),
		params.videoPlaceholderElement ? ToggleVideo : ToggleAnimation,
		ToggleThumbnail,
		ToggleUI,
		LearnMore,
		params.videoPlaceholderElement ? ReplayOverlay : null
	]
});

export function selectTemplate(videoSettings) {
	const params = videoSettings.getParams(),
		templates = getTemplates(params, videoSettings);

	let template = 'default';

	if (params.theme === 'hivi') {
		template = 'hivi';
	} else if (videoSettings.isSplitLayout()) {
		template = params.splitLayoutVideoPosition === 'right' ? 'split-right' : 'split-left';
	} else if (videoSettings.isAutoPlay()) {
		template = 'auto-play';
	}

	// TODO remove those ifs ADEN-6645
	if (params.isDarkTheme) {
		params.container.classList.add('theme-dark');
	}
	if (params.isMobile) {
		params.container.classList.add('theme-mobile-layout');
	}
	if (utils.client.isSmartphone() || utils.client.isTablet()) {
		params.container.classList.add('theme-mobile-device');
	}

	return templates[template];
}
