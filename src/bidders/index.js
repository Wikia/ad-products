import { context } from '@wikia/ad-engine';
import { A9 } from './a9/index';
import { Prebid } from './prebid/index';

require('./../../lib/prebid.min');

const biddersRegistry = {};
const realSlotPrices = {};

function forEachBidder(callback) {
	Object
		.keys(biddersRegistry)
		.forEach((bidderName) => {
			callback(biddersRegistry[bidderName]);
		});
}

function resetTargetingKeys(slotName) {
	forEachBidder((bidder) => {
		bidder.getTargetingKeysToReset().forEach((key) => {
			context.set(`slots.${slotName}.targeting.${key}`, null);
		});
	});
}

function applyTargetingParams(slotName, targeting) {
	Object
		.keys(targeting)
		.forEach(
			key => context.set(`slots.${slotName}.targeting.${key}`, targeting[key])
		);
}

function getBidParameters(slotName) {
	let floorPrice = 0;
	const slotParams = {};

	if (biddersRegistry.prebid && biddersRegistry.prebid.wasCalled()) {
		const prebidPrices = biddersRegistry.prebid.getSlotBestPrice(slotName);

		floorPrice = Math.max.apply(
			null,
			Object
				.keys(prebidPrices)
				.filter(key => !isNaN(parseFloat(prebidPrices[key])) && parseFloat(prebidPrices[key]) > 0)
				.map(key => parseFloat(prebidPrices[key]))
		);
	}

	forEachBidder((bidder) => {
		if (bidder && bidder.wasCalled()) {
			const params = bidder.getSlotTargetingParams(slotName, floorPrice);

			Object
				.keys(params)
				.forEach((key) => {
					slotParams[key] = params[key];
				});
		}
	});

	return slotParams;
}

function getCurrentSlotPrices(slotName) {
	const slotPrices = {};

	forEachBidder((bidder) => {
		if (bidder && bidder.isSlotSupported(slotName)) {
			const priceFromBidder = bidder.getSlotBestPrice(slotName);

			Object
				.keys(priceFromBidder)
				.forEach((bidderName) => {
					slotPrices[bidderName] = priceFromBidder[bidderName];
				});
		}
	});

	return slotPrices;
}

function getDfpSlotPrices(slotName) {
	return realSlotPrices[slotName] || {};
}

function requestBids({ resetListener = null, responseListener = null }) {
	const config = context.get('bidders');

	if (config.prebid) {
		biddersRegistry.prebid = new Prebid(config.prebid, resetListener, config.timeout);
	}

	if (config.a9 && config.a9.enabled) {
		biddersRegistry.a9 = new A9(config.a9, resetListener, config.timeout);
	}

	forEachBidder((bidder) => {
		if (responseListener) {
			bidder.addResponseListener(responseListener);
		}

		bidder.call();
	});
}

function storeRealSlotPrices(slotName) {
	realSlotPrices[slotName] = getCurrentSlotPrices(slotName);
}

function updateSlotTargeting(slotName) {
	const bidderTargeting = getBidParameters(slotName);

	storeRealSlotPrices(slotName);

	resetTargetingKeys(slotName);
	applyTargetingParams(slotName, bidderTargeting);
}

/**
 * @deprecated since v12.1.0
 */
function updateSlotsTargeting() {
	const slots = context.get('slots');

	Object
		.keys(slots)
		.forEach((slotName) => {
			updateSlotTargeting(slotName);
		});
}

function hasAllResponses() {
	const missingBidders = Object
		.keys(biddersRegistry)
		.filter((bidderName) => {
			const bidder = biddersRegistry[bidderName];

			return !bidder.wasCalled() && !bidder.hasResponse();
		});

	return missingBidders.length === 0;
}

export const bidders = {
	getCurrentSlotPrices,
	getDfpSlotPrices,
	hasAllResponses,
	requestBids,
	updateSlotTargeting,
	updateSlotsTargeting
};
