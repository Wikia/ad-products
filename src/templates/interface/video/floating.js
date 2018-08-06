import { slotService, utils } from '@wikia/ad-engine';
import CloseButton from '../close-button';

const FLOATING_CLASS_NAME = 'outstream-floating';

function canFloat(params) {
	return params.isFloatingEnabled;
}

function add(video, container, params) {
	if (!canFloat(params)) {
		return;
	}

	const slotElement = slotService.get(params.slotName).getElement();
	const videoOverlay = slotElement.querySelector('.video-overlay');
	const videoWrapper = slotElement.querySelector('.video-display-wrapper');

	video.addEventListener('wikiaSlotExpanded', () => {
		const observer = utils.viewportObserver.addListener(videoOverlay, (inViewport) => {
			if (inViewport) {
				slotElement.classList.remove(FLOATING_CLASS_NAME);
			} else {
				slotElement.classList.add(FLOATING_CLASS_NAME);
			}

			video.resize(videoWrapper.offsetWidth, videoWrapper.offsetHeight);
		}, {
			offsetTop: params.inViewportOffsetTop,
			offsetBottom: params.inViewportOffsetBottom,
			areaThreshold: 1
		});
		const disableFloating = () => {
			slotElement.classList.remove(FLOATING_CLASS_NAME);
			utils.viewportObserver.removeListener(observer);
			video.resize(videoWrapper.offsetWidth, videoWrapper.offsetHeight);
		};
		const closeButton = new CloseButton({
			onClick: disableFloating
		});

		videoWrapper.appendChild(closeButton.render());
		video.addEventListener('wikiaAdCompleted', disableFloating);
	});
}

export default {
	add
};
