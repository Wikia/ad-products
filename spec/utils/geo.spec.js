import {assert} from 'chai';
import {getCountryCode, getContinentCode, getRegionCode, isProperGeo, setGeoData} from '../../src/utils/geo.js';
import sinon from 'sinon';
import {context, slotService} from "@wikia/ad-engine/dist/ad-engine";

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
	});

	afterEach(function () {
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
		assert.ok(isProperGeo(['XX/100'], () => 0));
		assert.ok(isProperGeo(['XX/50'], () => 0));
		assert.ok(isProperGeo(['XX/50'], () => 0.1));
		assert.notOk(isProperGeo(['non-XX/50'], () => 0.1));
		assert.ok(isProperGeo(['XX/50'], () => 0.49));
		assert.ok(isProperGeo(['XX/50'], () => 0.499999));
		assert.notOk(isProperGeo(['XX/50'], () => 0.5));
		assert.notOk(isProperGeo(['XX/50'], () => 0.6));
		assert.notOk(isProperGeo(['XX/50'], () => 0.8));
		assert.notOk(isProperGeo(['XX/50'], () => 0.99));
		assert.notOk(isProperGeo(['XX/50'], () => 0.999999));
	});

	it('samples traffic for continent', () => {
		assert.ok(isProperGeo(['XX-EU/100'], () => 0));
		assert.ok(isProperGeo(['XX-EU/50'], () => 0));
		assert.ok(isProperGeo(['XX-EU/50'], () => 0.1));
		assert.notOk(isProperGeo(['non-XX-EU/50'], () => 0.1));
		assert.ok(isProperGeo(['XX-EU/50'], () => 0.49));
		assert.ok(isProperGeo(['XX-EU/50'], () => 0.499999));
		assert.notOk(isProperGeo(['XX-EU/50'], () => 0.5));
		assert.notOk(isProperGeo(['XX-EU/50'], () => 0.6));
		assert.notOk(isProperGeo(['XX-EU/50'], () => 0.8));
		assert.notOk(isProperGeo(['XX-EU/50'], () => 0.99));
		assert.notOk(isProperGeo(['XX-EU/50'], () => 0.999999));
	});

	it('samples traffic for country', () => {
		assert.ok(isProperGeo(['PL/100'], () => 0));
		assert.ok(isProperGeo(['PL/50'], () => 0));
		assert.ok(isProperGeo(['PL/50'], () => 0.1));
		assert.notOk(isProperGeo(['non-PL/50'], () => 0.1));
		assert.ok(isProperGeo(['PL/50'], () => 0.49));
		assert.ok(isProperGeo(['PL/50'], () => 0.499999));
		assert.notOk(isProperGeo(['PL/50'], () => 0.5));
		assert.notOk(isProperGeo(['PL/50'], () => 0.6));
		assert.notOk(isProperGeo(['PL/50'], () => 0.8));
		assert.notOk(isProperGeo(['PL/50'], () => 0.99));
		assert.notOk(isProperGeo(['PL/50'], () => 0.999999));
		assert.notOk(isProperGeo(['PL/50'], () => 0.999999));
		assert.notOk(isProperGeo(['non-PL/50'], () => 0.999999));
	});

	it('samples traffic for region', () => {
		assert.ok(isProperGeo(['PL-72/100'], () => 0));
		assert.ok(isProperGeo(['PL-72/50'], () => 0));
		assert.ok(isProperGeo(['PL-72/50'], () => 0.1));
		assert.notOk(isProperGeo(['non-PL-72/50'], () => 0.1));
		assert.ok(isProperGeo(['PL-72/50'], () => 0.49));
		assert.ok(isProperGeo(['PL-72/50'], () => 0.499999));
		assert.notOk(isProperGeo(['PL-72/50'], () => 0.5));
		assert.notOk(isProperGeo(['PL-72/50'], () => 0.6));
		assert.notOk(isProperGeo(['PL-72/50'], () => 0.8));
		assert.notOk(isProperGeo(['PL-72/50'], () => 0.99));
		assert.notOk(isProperGeo(['PL-72/50'], () => 0.999999));
		assert.notOk(isProperGeo(['PL-72/50'], () => 0.999999));
		assert.notOk(isProperGeo(['non-PL-72/50'], () => 0.999999));
	});

	it('DEBUG',() => {
		assert.notOk(isProperGeo(['non-PL-72/50'], () => 0.1));
	});
});
