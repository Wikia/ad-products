import Cookies from 'js-cookie';
import Random from './random';

const earth = 'XX',
	negativePrefix = 'non-',
	samplingChar = '/';

let geoData = null,
	cache = {};

function isCountryWithSampling(geo) {
	return value => !value.startsWith(negativePrefix) && value.includes(geo + samplingChar);
}

function getSamplingLimits(value) {
	return parseFloat(value.split(samplingChar)[1]) / 100;
}

function sampleGeo(countryList, geo) {
	let randomValue = Random.getRandom(),
		countryListWithSampling = countryList.filter(isCountryWithSampling(geo));

	return countryListWithSampling.length > 0 && countryListWithSampling
		.map(getSamplingLimits)
		.some(value => randomValue < value);

}

function containsEarth(countryList, random) {
	return countryList.indexOf(earth) > -1 || sampleGeo(countryList, earth, random);
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
 * @returns {boolean}
 */
export function isProperCountry(countryList = []) {
	return !!(
		countryList &&
		countryList.indexOf &&
		(countryList.indexOf(getCountryCode()) > -1 || sampleGeo(countryList, getCountryCode()))
	);
}

/**
 * Checks whether current regions (from cookie) is listed in array
 * @param {string[]} countryList
 * @returns {boolean}
 */
export function isProperRegion(countryList = []) {
	const code = `${getCountryCode()}-${getRegionCode()}`;
	return !!(
		countryList &&
		countryList.indexOf &&
		(countryList.indexOf(code) > -1 || sampleGeo(countryList, code))
	);
}

function containsContinent(countryList = [], random = Math.random) {
	const geo = `${earth}-${getContinentCode()}`;
	return countryList.indexOf(geo) > -1 || sampleGeo(countryList, geo, random);
}

/**
 * Checks whether current continent (from cookie) is listed in array
 * @param {string[]} countryList
 * @returns {boolean}
 */
export function isProperContinent(countryList = []) {
	return !!(
		countryList &&
		countryList.indexOf &&
		(containsEarth(countryList) || containsContinent(countryList))
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

export function resetCache() {
	cache = {};
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
		return cache[name];
	}

	const result = !!(
		countryList &&
		countryList.indexOf &&
		!isGeoExcluded(countryList) &&
		(isProperContinent(countryList) || isProperCountry(countryList) || isProperRegion(countryList))
	);

	cache[name] = result;

	return result;
}

export default {
	getContinentCode,
	getCountryCode,
	getRegionCode,
	isProperGeo,
	resetCache
};
