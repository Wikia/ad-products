import Cookies from 'js-cookie';

const earth = 'XX';
const negativePrefix = 'non-';

let geoData = null;

function isCountryWithSampling(geo) {
	return function (value) {
		return !value.startsWith(negativePrefix) && value.includes(geo + '/');
	};
}

function sampleGeo(countryList, geo, random) {
	let randomValue = random(),
		countryListWithSampling = countryList.filter(isCountryWithSampling(geo));

	return countryListWithSampling.length > 0 && countryListWithSampling
		.map(function (e) { return parseFloat(e.split('/')[1]) / 100; })
		.some(function (value) { return randomValue < value; });

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
export function isProperCountry(countryList = [], random = Math.random) {
	return !!(
		countryList &&
		countryList.indexOf &&
		(countryList.indexOf(getCountryCode()) > -1 || sampleGeo(countryList, getCountryCode(), random))
	);
}

/**
 * Checks whether current regions (from cookie) is listed in array
 * @param {string[]} countryList
 * @returns {boolean}
 */
export function isProperRegion(countryList = [], random = Math.random) {
	return !!(
		countryList &&
		countryList.indexOf &&
		(countryList.indexOf(`${getCountryCode()}-${getRegionCode()}`) > -1 || sampleGeo(countryList, getRegionCode(), random))
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
export function isProperContinent(countryList = [], random = Math.random) {
	return !!(
		countryList &&
		countryList.indexOf &&
		(containsEarth(countryList, random) || containsContinent(countryList, random))
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

/**
 * Checks whether current geo (from cookie) is listed in array and it's not excluded
 *
 * TODO remove random parameter
 * It is a workaround for issue with mocking Math.random in our environment
 * https://github.com/babel/babel/issues/5426#issuecomment-284839994
 *
 * @param {string[]} countryList
 * @returns {boolean}
 */
export function isProperGeo(countryList = [], random = Math.random) {
	return !!(
		countryList &&
		countryList.indexOf &&
		!isGeoExcluded(countryList) &&
		(isProperContinent(countryList, random) || isProperCountry(countryList, random) || isProperRegion(countryList, random))
	);
}

export default {
	getContinentCode,
	getCountryCode,
	getRegionCode,
	isProperGeo,
};
