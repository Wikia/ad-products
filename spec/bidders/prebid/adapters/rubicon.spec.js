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
			slots: {
				mobile_in_content: {
					siteId: '55412',
					sizeId: '203',
					zoneId: '563110',
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
							accountId: 7450,
							siteId: '55412',
							zoneId: '563110',
							name: 'mobile_in_content',
							position: 'btf',
							inventory: {
								pos: ['mobile_in_content'],
								src: ['gpt'],
								s0: [''],
								s1: ['not a top1k wiki'],
								s2: [''],
								lang: ['en']
							},
							video: {
								playerWidth: '640',
								playerHeight: '480',
								size_id: '203',
								language: 'en'
							}
						}
					}
				]
			}
		]);
	})
});
