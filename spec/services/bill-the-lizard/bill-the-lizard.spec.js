import sinon from 'sinon';
import {expect} from 'chai';
import {context} from '@wikia/ad-engine';
import {billTheLizard} from '../../../src/services/bill-the-lizard';

describe('Bill the Lizard service', () => {
	let requests = [];

	beforeEach(function () {
		requests = [];
		window.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
		window.XMLHttpRequest.onCreate = (req) => {
			requests.push(req);
		};
		context.set('services.billTheLizard', {
			enabled: true,
			host: 'service.com',
			endpoint: 'predict',
			models: [
				'ctp_desktop'
			],
			parameters: {
				foo: 1,
				bar: 'test',
				echo: [ 'one', 'two' ]
			},
			timeout: 2000
		});
	});

	afterEach(function () {
		window.XMLHttpRequest.restore();
	});

	it('should return empty array of predictions if nothing was parsed', () => {
		billTheLizard.parsePredictions({});

		expect(JSON.stringify(billTheLizard.getPredictions())).to.equal('{}');
		expect(billTheLizard.serialize()).to.equal('');
	});

	it('should return parsed prediction', () => {
		billTheLizard.parsePredictions({
			foo: {
				result: 1,
				version: '1.0.0'
			}
		});

		expect(billTheLizard.getPredictions().foo).to.equal(1);
		expect(billTheLizard.getPrediction('foo')).to.equal(1);
		expect(billTheLizard.serialize()).to.equal('foo_1');
	});

	it('should return parsed predictions', () => {
		billTheLizard.parsePredictions({
			foo: {
				result: 1,
				version: '1.0.0'
			},
			bar: {
				result: 0,
				version: '0.0.0'
			}
		});

		expect(billTheLizard.getPredictions().foo).to.equal(1);
		expect(billTheLizard.getPrediction('foo')).to.equal(1);
		expect(billTheLizard.getPredictions().bar).to.equal(0);
		expect(billTheLizard.getPrediction('bar')).to.equal(0);
		expect(billTheLizard.serialize()).to.equal('foo_1,bar_0');
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
		billTheLizard.call();

		const url = requests[0].url;

		expect(url.match(/\/\/service.com\/predict/)).to.be.ok;
		expect(url.match(/models=ctp_desktop/)).to.be.ok;
		expect(url.match(/&h=\d{1,2}&/)).to.be.ok;
		expect(url.match(/&dow=\d&/)).to.be.ok;
		expect(url.match(/foo=1&bar=test&echo=one,two/)).to.be.ok;
	});
});
