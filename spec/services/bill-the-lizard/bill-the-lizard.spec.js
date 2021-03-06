import sinon from 'sinon';
import {expect} from 'chai';
import {context} from '@wikia/ad-engine';
import {billTheLizard} from '../../../src/services/bill-the-lizard';

describe('Bill the Lizard service', () => {
	let requests = [];

	beforeEach(() => {
		requests = [];
		window.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
		window.XMLHttpRequest.onCreate = (req) => {
			requests.push(req);
		};
		context.set('services.billTheLizard', {
			enabled: true,
			host: 'http://service.com',
			endpoint: 'predict',
			projects: {
				queen_of_hearts: [
					{
						name: 'ctp_desktop:1.0.0',
						countries: ['XX'],
						on_0: ['logResult'],
						on_1: ['logResult']
					},
					{
						name: 'queen_of_hearts:0.0.1',
						countries: ['XX'],
						on_1: ['logResult']
					}
				]
			},
			parameters: {
				foo: 1,
				bar: 'test',
				echo: ['one', 'two']
			},
			timeout: 2000
		});
	});

	afterEach(() => {
		window.XMLHttpRequest.restore();
	});

	it('should return empty array of predictions if nothing was parsed', () => {
		billTheLizard.parsePredictions({}, {});

		expect(JSON.stringify(billTheLizard.getPredictions())).to.equal('{}');
		expect(billTheLizard.serialize()).to.equal('');
	});

	it('should return parsed prediction', () => {
		billTheLizard.parsePredictions([], {
			foo: {
				result: 1,
				version: '1.0.0'
			}
		});

		expect(billTheLizard.getPredictions()['foo:1.0.0']).to.equal(1);
		expect(billTheLizard.getPrediction('foo:1.0.0')).to.equal(1);
		expect(billTheLizard.serialize()).to.equal('foo:1.0.0=1');
	});

	it('should return parsed predictions', () => {
		billTheLizard.parsePredictions([], {
			foo: {
				result: 1,
				version: '1.0.0'
			},
			bar: {
				result: 0,
				version: '0.0.0'
			}
		});

		expect(billTheLizard.getPredictions()['foo:1.0.0']).to.equal(1);
		expect(billTheLizard.getPrediction('foo:1.0.0')).to.equal(1);
		expect(billTheLizard.getPredictions()['bar:0.0.0']).to.equal(0);
		expect(billTheLizard.getPrediction('bar:0.0.0')).to.equal(0);
		expect(billTheLizard.serialize()).to.equal('foo:1.0.0=1;bar:0.0.0=0');
	});

	it('dfp targeting should be set after parsing predictions', () => {
		billTheLizard.parsePredictions([
			{
				name: 'foo',
				dfp_targeting: true
			}
		], {
			foo: {
				result: 1,
				version: '1.0.0'
			},
			bar: {
				result: 0,
				version: '0.0.0'
			}
		});

		expect(context.get('targeting.btl').length).to.equal(1);
		expect(context.get('targeting.btl.0')).to.equal('foo:1.0.0_1');
	});

	it('should not call service if it is disabled in context', () => {
		context.set('services.billTheLizard.enabled', false);

		billTheLizard.call().then(() => {}, () => {});

		expect(requests.length).to.equal(0);
	});

	it('should not call service if there are no models in context', () => {
		context.set('services.billTheLizard.models', []);

		billTheLizard.call().then(() => {}, () => {});

		expect(requests.length).to.equal(0);
	});

	it('should call service with built url', () => {
		billTheLizard.projectsHandler.enable('queen_of_hearts');
		billTheLizard.call();

		const url = requests[0].url;

		expect(url.match(/http:\/\/service.com\/predict/)).to.be.ok;
		expect(url.match(/models=ctp_desktop/)).to.be.ok;
		expect(url.match(/&h=\d{1,2}&/)).to.be.ok;
		expect(url.match(/&dow=\d&/)).to.be.ok;
		expect(url.match(/foo=1&bar=test&echo=one,two/)).to.be.ok;
	});
});
