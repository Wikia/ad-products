import { context } from '@wikia/ad-engine';
import { transformPriceFromCpm, DEFAULT_MAX_CPM } from './price-helper';

const videoBiddersCap50 = ['appnexusAst', 'rubicon', 'wikiaVideo']; // bidders with $50 cap

export function getSettings() {
	return {
		standard: {
			alwaysUseBid: false,
			adserverTargeting: [
				{
					key: 'hb_bidder',
					val: ({ bidderCode }) => bidderCode
				},
				{
					key: 'hb_adid',
					val: ({ adId }) => adId
				},
				{
					key: 'hb_pb',
					val: (bidResponse) => {
						let maxCpm = DEFAULT_MAX_CPM;
						if (videoBiddersCap50.includes(bidResponse.bidderCode)) {
							maxCpm = 50;
						}
						return transformPriceFromCpm(bidResponse.cpm, maxCpm);
					}
				},
				{
					key: 'hb_size',
					val: ({ size }) => size
				},
				{
					key: 'hb_uuid',
					val: bidResponse => (
						(
							bidResponse.bidderCode === 'appnexusAst' && context.get('custom.appnexusDfp')
						) || (
							bidResponse.bidderCode === 'rubicon' && context.get('custom.rubiconDfp')
						) ? bidResponse.videoCacheKey : 'disabled'
					)
				}
			]
		}
	};
}
