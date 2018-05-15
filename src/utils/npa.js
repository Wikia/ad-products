import { context, trackingOptOut } from '@wikia/ad-engine';

const tracking = 'gpt';

export function setupNpaContext() {
	const optedOut = trackingOptOut.isOptedOut(tracking) ? 1 : 0;
	context.set('targeting.npa', optedOut.toString());
}
