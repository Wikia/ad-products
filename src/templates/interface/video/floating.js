import { slotService, utils } from '@wikia/ad-engine';
import CloseButton from '../close-button';

const FLOATING_CLASS_NAME = 'outstream-floating';

/**
 * Makes the video element floating once main container is out of viewport
 * @param video Porvata video element
 * @param container Video container
 * @param params videoSettings parameters
 */
function add(video, container, params) {
	if (!params.isFloatingEnabled) {
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

			video.isFloating = !inViewport;
			video.resize(videoWrapper.offsetWidth, videoWrapper.offsetHeight);
		}, {
			offsetTop: params.inViewportOffsetTop,
			offsetBottom: params.inViewportOffsetBottom,
			areaThreshold: 1
		});
		const disableFloating = () => {
			video.isFloating = false;
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
