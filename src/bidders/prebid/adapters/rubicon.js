import { context } from '@wikia/ad-engine';
import { BaseAdapter } from './base-adapter';
import { getTargeting } from './../prebid-helper';

export class Rubicon extends BaseAdapter {
	constructor(options) {
		super(options);

		this.bidderName = 'rubicon';
		this.accountId = 7450;
	}

	prepareConfigForAdUnit(code, {
		siteId, zoneId, sizeId, position
	}) {
		if (code === 'featured' && !context.get('custom.rubiconInFV')) {
			return null;
		}

		const targeting = getTargeting(code);

		return {
			code,
			mediaType: 'video',
			mediaTypes: {
				video: {
					playerSize: [640, 480]
				}
			},
			bids: [
				{
					bidder: this.bidderName,
					params: {
						accountId: this.accountId,
						siteId,
						zoneId,
						name: code,
						position,
						inventory: targeting,
						video: {
							playerWidth: '640',
							playerHeight: '480',
							size_id: sizeId,
							language: targeting.lang[0]
						}
					}
				}
			]
		};
	}
}
