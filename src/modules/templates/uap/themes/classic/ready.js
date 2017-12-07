import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import ResolvedState from './resolved-state';

export function adIsReady({ adSlot, params, videoSettings }) {
	return ResolvedState.setImage(videoSettings)
		.then(() => SlotTweaker.makeResponsive(adSlot, params.aspectRatio));
}
