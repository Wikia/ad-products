import { slotService, slotTweaker } from '@wikia/ad-engine';
import { DEFAULT_VIDEO_ASPECT_RATIO } from '../../outstream/porvata-template';

function add(video, container, params) {
	const slot = slotService.get(params.slotName);

	let slotExpanded = false;

	video.addEventListener('loaded', () => {
		if (!slotExpanded) {
			slotTweaker.expand(slot);
			slotExpanded = true;

			// Delay dispatching event so it's run after browser really start expanding the slot
			setTimeout(() => {
				video.ima.dispatchEvent('wikiaSlotExpanded');
			}, 0);
		}

		// TODO: Make sure floater and resize works
		// if (!floater.isFloating(slot)) {
		const slotWidth = slot.getElement().scrollWidth;
		video.resize(slotWidth, slotWidth / DEFAULT_VIDEO_ASPECT_RATIO);
		// }
	});

	video.addEventListener('allAdsCompleted', () => {
		slotTweaker.collapse(slot);
		video.ima.dispatchEvent('wikiaSlotCollapsed');
	});
}

export default {
	add
};
