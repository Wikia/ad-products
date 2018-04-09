import {assert} from 'chai';
import {resetSamplingCache, getCountryCode, getContinentCode, getRegionCode, isProperGeo, setGeoData, getSamplingResults} from '../../src/utils/geo.js';
import Random from '../../src/utils/random.js';
import sinon from 'sinon';
import {context, slotService} from '@wikia/ad-engine';

describe('Geo', () => {
	let sandbox;

	beforeEach(() => {
		setGeoData({
			city: 'Poznan',
			country: 'PL',
			continent: 'EU',
			region: '72',
		});

		sandbox = sinon.sandbox.create();
		sandbox.stub(Random, 'getRandom')
	});

	afterEach(function () {
		resetSamplingCache();
		sandbox.restore();
	});

	it('returns country and continent code', () => {
		assert.equal(getCountryCode(), 'PL');
		assert.equal(getContinentCode(), 'EU');
	});

	it('returns region code', () => {
		assert.equal(getRegionCode(), '72');
	});

	it('isProperGeo test empty', () => {
		assert.notOk(isProperGeo());
	});

	it('isProperGeo test - region', () => {
		// Region
		assert.ok(isProperGeo(['PL-72']));
		assert.ok(isProperGeo(['ZZ', 'PL-72', 'non-PL-33']));
		assert.notOk(isProperGeo(['ZZ', 'PL-33']));
		assert.notOk(isProperGeo(['non-PL-72']));
		assert.notOk(isProperGeo(['ZZ', 'non-PL-72']));
		assert.notOk(isProperGeo(['ZZ', 'PL-72', 'non-PL-72']));
	});

	it('isProperGeo test - country', () => {
		assert.ok(isProperGeo(['PL']));
		assert.ok(isProperGeo(['ZZ', 'PL', 'non-YY']));
		assert.notOk(isProperGeo(['ZZ', 'YY']));
		assert.notOk(isProperGeo(['non-PL']));
		assert.notOk(isProperGeo(['ZZ', 'non-PL']));
		assert.notOk(isProperGeo(['ZZ', 'PL', 'non-PL']));
	});

	it('isProperGeo test - continent', () => {
		assert.ok(isProperGeo(['XX-EU']));
		assert.ok(isProperGeo(['XX-NA', 'XX-EU', 'non-XX-SA']));
		assert.notOk(isProperGeo(['XX-NA', 'XX-SA']));
		assert.notOk(isProperGeo(['XX-NA', 'XX-SA', 'non-XX-EU']));
		assert.notOk(isProperGeo(['XX-NA', 'XX-EU', 'non-XX-EU']));
		assert.notOk(isProperGeo(['non-XX-EU']));
	});

	it('isProperGeo test - earth', () => {
		assert.ok(isProperGeo(['XX']));
		assert.ok(isProperGeo(['XX', 'non-PL-33']));
		assert.notOk(isProperGeo(['XX', 'non-PL-72']));
		assert.ok(isProperGeo(['XX', 'non-DE']));
		assert.notOk(isProperGeo(['XX', 'non-PL']));
		assert.ok(isProperGeo(['XX', 'non-XX-SA']));
		assert.notOk(isProperGeo(['XX', 'non-XX-EU']));
	});

	it('samples traffic for earth', () => {
		Random.getRandom.returns(0);
		assert.ok(isProperGeo(['XX/100']));

		Random.getRandom.returns(0);
		assert.ok(isProperGeo(['XX/50']));

		Random.getRandom.returns(0.1);
		assert.ok(isProperGeo(['XX/50']));

		Random.getRandom.returns(0.1);
		assert.notOk(isProperGeo(['non-XX/50']));

		Random.getRandom.returns(0.49);
		assert.ok(isProperGeo(['XX/50']));

		Random.getRandom.returns(0.499999);
		assert.ok(isProperGeo(['XX/50']));

		Random.getRandom.returns(0.5);
		assert.notOk(isProperGeo(['XX/50']));

		Random.getRandom.returns(0.6);
		assert.notOk(isProperGeo(['XX/50']));

		Random.getRandom.returns(0.8);
		assert.notOk(isProperGeo(['XX/50']));

		Random.getRandom.returns(0.99);
		assert.notOk(isProperGeo(['XX/50']));

		Random.getRandom.returns(0.999999);
		assert.notOk(isProperGeo(['XX/50']));

	});

	it('samples traffic for continent', () => {
		Random.getRandom.returns(0);
		assert.ok(isProperGeo(['XX-EU/100']));

		Random.getRandom.returns(0);
		assert.ok(isProperGeo(['XX-EU/50']));

		Random.getRandom.returns(0.1);
		assert.ok(isProperGeo(['XX-EU/50']));

		Random.getRandom.returns(0.1);
		assert.notOk(isProperGeo(['non-XX-EU/50']));

		Random.getRandom.returns(0.49);
		assert.ok(isProperGeo(['XX-EU/50']));

		Random.getRandom.returns(0.499999);
		assert.ok(isProperGeo(['XX-EU/50']));

		Random.getRandom.returns(0.5);
		assert.notOk(isProperGeo(['XX-EU/50']));

		Random.getRandom.returns(0.6);
		assert.notOk(isProperGeo(['XX-EU/50']));

		Random.getRandom.returns(0.8);
		assert.notOk(isProperGeo(['XX-EU/50']));

		Random.getRandom.returns(0.99);
		assert.notOk(isProperGeo(['XX-EU/50']));

		Random.getRandom.returns(0.999999);
		assert.notOk(isProperGeo(['XX-EU/50']));

	});

	it('samples traffic for country', () => {
		Random.getRandom.returns(0);
		assert.ok(isProperGeo(['PL/100']));

		Random.getRandom.returns(0);
		assert.ok(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.1);
		assert.ok(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.1);
		assert.notOk(isProperGeo(['non-PL/50']));

		Random.getRandom.returns(0.49);
		assert.ok(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.499999);
		assert.ok(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.5);
		assert.notOk(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.6);
		assert.notOk(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.8);
		assert.notOk(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.99);
		assert.notOk(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.999999);
		assert.notOk(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.999999);
		assert.notOk(isProperGeo(['PL/50']));

		Random.getRandom.returns(0.999999);
		assert.notOk(isProperGeo(['non-PL/50']));

	});

	it('samples traffic for region', () => {
		Random.getRandom.returns(0);
		assert.ok(isProperGeo(['PL-72/100']));

		Random.getRandom.returns(0);
		assert.ok(isProperGeo(['PL-72/50']));

		Random.getRandom.returns(0.1);
		assert.ok(isProperGeo(['PL-72/50']));

		Random.getRandom.returns(0.1);
		assert.notOk(isProperGeo(['non-PL-72/50']));

		Random.getRandom.returns(0.49);
		assert.ok(isProperGeo(['PL-72/50']));

		Random.getRandom.returns(0.5);
		assert.notOk(isProperGeo(['PL-72/50']));

		Random.getRandom.returns(0.6);
		assert.notOk(isProperGeo(['PL-72/50']));

		Random.getRandom.returns(0.8);
		assert.notOk(isProperGeo(['PL-72/50']));

		Random.getRandom.returns(0.99);
		assert.notOk(isProperGeo(['PL-72/50']));

		Random.getRandom.returns(0.999999);
		assert.notOk(isProperGeo(['PL-72/50']));

		Random.getRandom.returns(0.999999);
		assert.notOk(isProperGeo(['PL-72/50']));

		Random.getRandom.returns(0.999999);
		assert.notOk(isProperGeo(['non-PL-72/50']));
	});

	it('samples traffic with storing results in cache', () => {
		Random.getRandom.returns(0.1);
		assert.ok(isProperGeo(['PL/50'], 'test'));
		assert.ok(isProperGeo(['PL/50'], 'A'));

		Random.getRandom.returns(0.3);
		assert.ok(isProperGeo(['PL/50'], 'test'));
		assert.ok(isProperGeo(['PL/50'], 'B'));

		Random.getRandom.returns(0.49);
		assert.ok(isProperGeo(['PL/50'], 'test'));
		assert.ok(isProperGeo(['PL/50'], 'C'));

		Random.getRandom.returns(0.5);
		assert.ok(isProperGeo(['PL/50'], 'test'));
		assert.notOk(isProperGeo(['PL/50'], 'D'));

		Random.getRandom.returns(0.9);
		assert.ok(isProperGeo(['PL/50'], 'test'));
		assert.notOk(isProperGeo(['PL/50'], 'E'));
	});

	it('samples only specific geos', () => {
		Random.getRandom.returns(0.3);
		assert.notOk(isProperGeo(['PL-11/50']));

		Random.getRandom.returns(0.3);
		assert.notOk(isProperGeo(['XX-ZZ/50']));

		Random.getRandom.returns(0.3);
		assert.notOk(isProperGeo(['ZZ/50']));

		Random.getRandom.returns(0.6);
		assert.notOk(isProperGeo(['ZZ/50']));

		Random.getRandom.returns(0.9);
		assert.notOk(isProperGeo(['ZZ/50']));
	});

	it('samples fractions', () => {
		Random.getRandom.returns(0.0009);
		assert.ok(isProperGeo(['PL/0.1']));

		Random.getRandom.returns(0.001);
		assert.notOk(isProperGeo(['PL/0.1']));

		Random.getRandom.returns(0.001);
		assert.ok(isProperGeo(['PL/0.2']));

		Random.getRandom.returns(0.002);
		assert.notOk(isProperGeo(['PL/0.2']));

		Random.getRandom.returns(0.003);
		assert.notOk(isProperGeo(['PL/0.2']));
	});

	it('returns cached values', () => {
		isProperGeo(['PL/50']);
		assert.deepEqual(getSamplingResults(), []);
		resetSamplingCache();

		Random.getRandom.returns(0.5);
		assert.notOk(isProperGeo(['PL/10'], 'test'));
		assert.deepEqual(getSamplingResults(), ['test_A_90']);
		resetSamplingCache();

		Random.getRandom.returns(0.01);
		assert.ok(isProperGeo(['PL/10'], 'test'));
		assert.deepEqual(getSamplingResults(), ['test_B_10']);
		resetSamplingCache();

		Random.getRandom.returns(0.0001);
		assert.ok(isProperGeo(['PL/0.1'], 'test'));
		assert.deepEqual(getSamplingResults(), ['test_B_0.1']);
		resetSamplingCache();

		Random.getRandom.returns(0.5);
		assert.notOk(isProperGeo(['PL/0.1'], 'test'));
		assert.deepEqual(getSamplingResults(), ['test_A_99.9']);
		resetSamplingCache();

		Random.getRandom.returns(0.15);
		assert.ok(isProperGeo(['PL/25'], 'CAT'));
		assert.notOk(isProperGeo(['PL/10'], 'DOG'));
		assert.deepEqual(getSamplingResults(), ['CAT_B_25', 'DOG_A_90']);
		resetSamplingCache();
	});

	it('blocks sampled countries before sample', () => {
		Random.getRandom.returns(0.15);
		assert.notOk(isProperGeo(['PL/25', 'non-PL'], 'test'));
	})

});
