import { context } from '@wikia/ad-engine';
import { getAdapters } from './adapters-registry';

const lazyLoadSlots = [
	'bottom_leaderboard'
];

function isSlotAvailable(code, lazyLoad) {
	let available = true;
	const isSlotLazy = lazyLoadSlots.indexOf(code) !== -1;

	if (lazyLoad !== 'off' && ((lazyLoad === 'pre' && isSlotLazy) || (lazyLoad === 'post' && !isSlotLazy))) {
		available = false;
	}

	return available;
}

export function setupAdUnits(adaptersConfig, lazyLoad = 'off') {
	const adUnits = [];
	const adapters = getAdapters(adaptersConfig);

	adapters.forEach((adapter) => {
		if (adapter && adapter.enabled) {
			const adapterAdUnits = adapter.prepareAdUnits();

			adapterAdUnits.forEach((adUnit) => {
				if (adUnit && isSlotAvailable(adUnit.code, lazyLoad)) {
					adUnits.push(adUnit);
				}
			});
		}
	});

	return adUnits;
}

export function getBidByAdId(adId) {
	if (!window.pbjs || typeof window.pbjs.getBidResponses !== 'function') {
		return null;
	}

	let bids = window.pbjs.getAllPrebidWinningBids().filter(bid => adId === bid.adId);

	if (!bids.length) {
		const responses = window.pbjs.getBidResponses();

		Object
			.keys(responses)
			.forEach((adUnit) => {
				const adUnitsBids = responses[adUnit].bids.filter(bid => adId === bid.adId);

				bids = bids.concat(adUnitsBids);
			});
	}

	return bids.length ? bids[0] : null;
}

export function getPrebid() {
	return window.pbjs;
}

export function getTargeting(slotName) {
	const provider = context.get('state.isMobile') ? 'mobile' : 'gpt',
		s1 = context.get('targeting.wikiIsTop1000') ? context.get('targeting.s1') : 'not a top1k wiki';

	return {
		pos: [slotName],
		src: [provider],
		s0: [context.get('targeting.s0') || ''],
		s1: [s1],
		s2: [context.get('targeting.s2') || ''],
		lang: [context.get('targeting.wikiLanguage') || 'en']
	};
}

export function getWinningVideoBidBySlotName(slotName, allowedBidders) {
	if (!window.pbjs || !window.pbjs.getBidResponsesForAdUnitCode) {
		return null;
	}

	const bids = window.pbjs.getBidResponsesForAdUnitCode(slotName).bids || [];

	return bids
		.filter((bid) => {
			const canUseThisBidder = !allowedBidders || allowedBidders.indexOf(bid.bidderCode) !== -1;
			const hasVast = bid.vastUrl || bid.vastContent;

			return canUseThisBidder && hasVast && bid.cpm > 0;
		})
		.reduce((previousBid, currentBid) => {
			if (previousBid === null || currentBid.cpm > previousBid.cpm) {
				return currentBid;
			}

			return previousBid;
		}, null);
}

export function pushPrebid(callback) {
	window.pbjs.que.push(callback);
}
