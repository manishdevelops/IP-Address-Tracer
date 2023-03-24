import { API_KEY } from '/apikey.js';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
	ipAddress: '',
	location: {},
	timezone: '',
	isp: '',
};

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
		console.log(data);
		console.log(state);
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};
