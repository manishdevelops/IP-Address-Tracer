import { API_URL, MAP_URL, ATTRIBUTION, API_KEY } from './config.js';
import { getJSON } from './helpers.js';
console.log(API_KEY);
export const state = {
	ipAddress: '',
	location: {},
	timezone: '',
	isp: '',
};

/**
 * Fetch data of received ip address
 * @param {string} ip - accepts an ip address
 * @returns <Promise.<string>
 * @requires view/helpers.getJSON
 * @throws exception
 */
export const loadData = async function (ip) {
	try {
		const data = await getJSON(`${API_URL}${API_KEY}=${ip}`);
		state.ipAddress = data.ip;
		state.isp = data.isp;
		const { city, country, postalCode, timezone, lat, lng } = data.location;
		state.location.city = city;
		state.location.country = country;
		state.location.postalCode = postalCode;
		state.location.timezone = timezone;
		state.location.coords = [lat, lng];
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

/**
 * map urls
 * @returns {object} - map urls for render
 */
export const mapUrls = function () {
	return {
		map_url: MAP_URL,
		attribution: ATTRIBUTION,
	};
};
