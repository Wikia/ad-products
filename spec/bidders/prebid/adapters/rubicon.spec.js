import { expect } from 'chai';
import { Rubicon }  from '../../../../src/bidders/prebid/adapters/rubicon'

describe('Rubicon bidder adapter', () => {
	it('can be enabled', () => {
		let rubicon = new Rubicon({
			enabled: true
		});

		expect(rubicon.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let rubicon = new Rubicon({
			enabled: true,
			accountId: 1234,
			slots: {
				mobile_in_content: {
					siteId: '55111',
					sizeId: '101',
					zoneId: '88888',
					position: 'btf'
				}
			}
		});

		expect(rubicon.prepareAdUnits()).to.deep.equal([
			{
				code: 'mobile_in_content',
				mediaType: 'video',
				mediaTypes: {
					video: {
						playerSize: [640, 480]
					}
				},
				bids: [
					{
						bidder: 'rubicon',
						params: {
							accountId: 1234,
							siteId: '55111',
							zoneId: '88888',
							name: 'mobile_in_content',
							position: 'btf',
							inventory: {
								pos: ['mobile_in_content']
							},
							video: {
								playerWidth: '640',
								playerHeight: '480',
								size_id: '101',
								language: 'en'
							}
						}
					}
				]
			}
		]);
	});
});
