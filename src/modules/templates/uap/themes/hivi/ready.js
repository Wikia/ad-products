import SlotTweaker from 'ad-engine/src/services/slot-tweaker';

export function adIsReady({ adSlot }) {
	return SlotTweaker.onReady(adSlot);
}
