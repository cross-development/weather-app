//Core
import axios from 'axios';

axios.defaults.baseURL = 'https://api.weatherbit.io/v2.0/';
const params = { key: 'b8222148b5494f7cbc5d57b76e5c3cc3' };

export default {
	query: '',

	code: '',

	fetchCurrentWeatherByQuery() {
		return axios
			.get(`current?city=${this.query},${this.code}`, { params })
			.then(response => response)
			.catch(error => {
				throw Error(error);
			});
	},

	fetchForecastWeather() {
		return axios
			.get(`forecast/daily?city=${this.query},${this.code}`, { params })
			.then(response => response)
			.catch(error => {
				throw Error(error);
			});
	},

	/**
	 * @param {string} query
	 */
	set searchQuery(query) {
		this.query = query;
	},

	/**
	 * @param {string} code
	 */
	set countryCode(code) {
		this.code = code;
	},
};
