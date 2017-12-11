import SlotTweaker from 'ad-engine/src/services/slot-tweaker';

export function adIsReady({ adSlot, params }) {
	return SlotTweaker.makeResponsive(adSlot, params.aspectRatio);
}
