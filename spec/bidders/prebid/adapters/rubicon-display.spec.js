import { expect } from 'chai';
import { RubiconDisplay }  from '../../../../src/bidders/prebid/adapters/rubicon-display'

describe('RubiconDisplay bidder adapter', () => {
	it('can be enabled', () => {
		let rubiconDisplay = new RubiconDisplay({
			enabled: true
		});

		expect(rubiconDisplay.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let rubiconDisplay = new RubiconDisplay({
			enabled: true,
			slots: {
				bottom_leaderboard: {
					sizes: [
						[300, 250],
						[320, 50]
					],
					targeting: {
						loc: ['top']
					},
					position: 'btf',
					siteId: '23565',
					zoneId: '87671'
				}
			}
		});

		expect(rubiconDisplay.prepareAdUnits()).to.deep.equal([
			{
				code: 'bottom_leaderboard',
				mediaTypes: {
					banner: {
						sizes: [
							[300, 250],
							[320, 50]
						]
					}
				},
				bids: [
					{
						bidder: 'rubicon_display',
						params: {
							accountId: 7450,
							siteId: '23565',
							zoneId: '87671',
							name: 'bottom_leaderboard',
							position: 'btf',
							keywords: ['rp.fastlane'],
							inventory: {
								pos: ['bottom_leaderboard'],
								src: ['gpt'],
								s0: [''],
								s1: ['not a top1k wiki'],
								s2: [''],
								lang: ['en'],
								loc: ['top']
							}
						}
					}
				]
			}
		]);
	});
});
