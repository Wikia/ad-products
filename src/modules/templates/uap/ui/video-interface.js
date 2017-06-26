import CloseButton from './close-button';
import PauseOverlay from './pause-overlay';
import ReplayOverlay from './replay-overlay';
import ProgressBar from './progress-bar';
import ToggleVideo from './toggle-video';
import ToggleAnimation from './toggle-animation';
import VolumeControl from './volume-control';

const mapping = {
	closeButton: CloseButton,
	pauseOverlay: PauseOverlay,
	replayOverlay: ReplayOverlay,
	progressBar: ProgressBar,
	volumeControl: VolumeControl,
	toggleVideo: ToggleVideo,
	toggleVideoWithAnimation: ToggleAnimation
};

function setup(video, uiElements, params) {
	uiElements.forEach((element) => {
		if (mapping[element]) {
			mapping[element].add(video, params);
		}
	});
}

export default {
	setup
};
