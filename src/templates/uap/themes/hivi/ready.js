import { slotTweaker } from '@wikia/ad-engine';

export function adIsReady({ adSlot, params }) {
	return slotTweaker.makeResponsive(adSlot, params.aspectRatio);
}
