import { slotTweaker } from '@wikia/ad-engine';
import { resolvedState } from '../../resolved-state';

export function adIsReady({ adSlot, params, videoSettings }) {
	return resolvedState.setImage(videoSettings)
		.then(() => slotTweaker.makeResponsive(adSlot, params.aspectRatio));
}
