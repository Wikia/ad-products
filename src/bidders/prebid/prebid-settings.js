import { context } from '@wikia/ad-engine';
import { transformPriceFromCpm } from './price-helper';

export function getSettings() {
	return {
		standard: {
			alwaysUseBid: false,
			adserverTargeting: [{
				key: 'hb_bidder',
				val: ({ bidderCode }) => bidderCode
			}, {
				key: 'hb_adid',
				val: ({ adId }) => adId
			}, {
				key: 'hb_pb',
				val: bidResponse => transformPriceFromCpm(bidResponse.cpm)
			}, {
				key: 'hb_size',
				val: ({ size }) => size
			}, {
				key: 'hb_uuid',
				val: bidResponse => ((
					bidResponse.bidderCode === 'appnexusAst' && context.get('custom.appnexusDfp')) || (
					bidResponse.bidderCode === 'rubicon' && context.get('custom.rubiconDfp'))
					? bidResponse.videoCacheKey : 'disabled')
			}]
		}
	};
}
