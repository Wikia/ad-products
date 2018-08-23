import { expect } from 'chai';
import { transformPriceFromCpm } from '../../../src/bidders/prebid/price-helper';

describe('transformPriceFromCpm', function () {
	it('should return bucket from price converted to string with two decimal places', function () {
		const testVectors = [
			[0.01, '0.01'],
			[0.02, '0.01'],
			[0.05, '0.05'],

			[0.07, '0.05'],
			[0.10, '0.10'],
			[1.17, '1.15'],
			[4.99, '4.95'],

			[5.47, '5.40'],
			[5.97, '5.90'],
			[9.99, '9.90'],

			[10.01, '10.00'],
			[10.09, '10.00'],
			[10.49, '10.00'],
			[10.99, '10.50'],
			[19.99, '19.50'],

			[20.99, '20.00'],
			[49.99, '49.00'],
			[50.00, '50.00'],
			[51.00, '50.00'],
		];
		testVectors.forEach((vector) => {
			expect(transformPriceFromCpm(vector[0], 50)).to.equal(vector[1]);
		});
	});

	it('should cap to 20 even if maxCpm is lower than 20', function () {
		expect(transformPriceFromCpm(21, 10)).to.equal('20.00');
	});
});