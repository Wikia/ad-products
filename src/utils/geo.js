import Cookies from 'js-cookie';
import Random from './random';

const earth = 'XX',
	negativePrefix = 'non-',
	samplingChar = '/';

let geoData = null,
	cache = [];

function hasSampling(geo) {
	return value => !value.startsWith(negativePrefix) && value.indexOf(geo + samplingChar) > -1;
}

function getSamplingLimits(value) {
	return parseFloat(value.split(samplingChar)[1]) / 100;
}

function getResult(samplingLimits, name) {
	const randomValue = Random.getRandom(),
		result = samplingLimits.some(value => randomValue < value),
		limitValue = samplingLimits[0] * 100,
		group = result ? 'B' : 'A';

	if (name) {
		cache[name] = {
			name,
			group,
			limit: result ? limitValue : 100 - limitValue,
			result
		};
	}

	return result;
}

function isSampledForGeo(countryList, geo, name) {
	const countryListWithSampling = countryList.filter(hasSampling(geo));

	if (countryListWithSampling.length === 0) {
		return false;
	}

	return getResult(countryListWithSampling.map(getSamplingLimits), name);
}

function containsEarth(countryList, name) {
	return countryList.indexOf(earth) > -1 || isSampledForGeo(countryList, earth, name);
}

/**
 * Return geo data from cookie
 * @returns {Object}
 */
function getGeoData() {
	if (geoData === null) {
		const jsonData = decodeURIComponent(Cookies.get('Geo'));

		try {
			geoData = JSON.parse(jsonData) || {};
		} catch (e) {
			geoData = {};
		}
	}

	return geoData;
}

/**
 * Set geo data
 * @param {Object} data
 * @returns {void}
 */
export function setGeoData(data) {
	geoData = data;
}

/**
 * Return country code based on cookie
 * @returns {string}
 */
export function getCountryCode() {
	return getGeoData().country;
}

/**
 * Return continent code based on cookie
 * @returns {string}
 */
export function getContinentCode() {
	return getGeoData().continent;
}

/**
 * Return region code based on cookie
 * @returns {*}
 */
export function getRegionCode() {
	return getGeoData().region;
}

/**
 * Checks whether current country (from cookie) is listed in array
 * @param {string[]} countryList
 * @param {string|undefined}name
 * @returns {boolean}
 */
export function isProperCountry(countryList = [], name) {
	return !!(
		countryList &&
		countryList.indexOf &&
		(countryList.indexOf(getCountryCode()) > -1 || isSampledForGeo(countryList, getCountryCode(), name))
	);
}

/**
 * Checks whether current regions (from cookie) is listed in array
 * @param {string[]} countryList
 * @param {string|undefined} name
 * @returns {boolean}
 */
export function isProperRegion(countryList = [], name) {
	const code = `${getCountryCode()}-${getRegionCode()}`;
	return !!(
		countryList &&
		countryList.indexOf &&
		(countryList.indexOf(code) > -1 || isSampledForGeo(countryList, code, name))
	);
}

function containsContinent(countryList = [], name) {
	const geo = `${earth}-${getContinentCode()}`;
	return countryList.indexOf(geo) > -1 || isSampledForGeo(countryList, geo, name);
}

/**
 * Checks whether current continent (from cookie) is listed in array
 * @param {string[]} countryList
 * @param {string|undefined} name
 * @returns {boolean}
 */
export function isProperContinent(countryList = [], name) {
	return !!(
		countryList &&
		countryList.indexOf &&
		(containsEarth(countryList, name) || containsContinent(countryList, name))
	);
}

/**
 * Checks whether current geo is excluded in array (by using non- prefix)
 * @param {string[]} countryList
 * @returns {boolean}
 */
function isGeoExcluded(countryList = []) {
	return !!(
		countryList.indexOf(`${negativePrefix}${getCountryCode()}`) > -1 ||
		countryList.indexOf(`${negativePrefix}${getCountryCode()}-${getRegionCode()}`) > -1 ||
		countryList.indexOf(`${negativePrefix}${earth}-${getContinentCode()}`) > -1
	);
}

function getResultLog(name) {
	return `${cache[name].name}_${cache[name].group}_${cache[name].limit}`;
}

export function resetSamplingCache() {
	cache = {};
}

export function getSamplingResults() {
	return Object.keys(cache).map(getResultLog);
}

/**
 * Checks whether current geo (from cookie) is listed in array and it's not excluded
 *
 * @param {string[]} countryList
 * @param {string|undefined} name
 * @returns {boolean}
 */
export function isProperGeo(countryList = [], name = undefined) {
	if (name !== undefined && typeof cache[name] !== 'undefined') {
		return cache[name].result;
	}
	return !!(
		countryList &&
		countryList.indexOf &&
		!isGeoExcluded(countryList) &&
		(isProperContinent(countryList, name) || isProperCountry(countryList, name) || isProperRegion(countryList, name))
	);
}

export default {
	getContinentCode,
	getCountryCode,
	getRegionCode,
	getSamplingResults,
	isProperGeo,
	resetSamplingCache
};
