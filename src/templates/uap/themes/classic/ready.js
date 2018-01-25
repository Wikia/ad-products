import { slotTweaker } from '@wikia/ad-engine';
import { resolvedState } from '../../resolved-state';

export async function adIsReady({ adSlot, params, videoSettings }) {
	await resolvedState.setImage(videoSettings);
	await slotTweaker.makeResponsive(adSlot, params.aspectRatio);
}
