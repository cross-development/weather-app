//Core
import axios from 'axios';

axios.defaults.baseURL = 'https://api.weatherbit.io/v2.0/';
const params = { key: 'b8222148b5494f7cbc5d57b76e5c3cc3' };

export default {
	query: '',

	code: '',

	async fetchCurrentWeatherByQuery() {
		return axios
			.get(`current?city=${this.query},${this.code}`, { params })
			.then(response => response)
			.catch(error => {
				throw Error(404);
			});
	},

	fetchCurrentWeatherByGPS() {},

	fetchForecastWeather() {
		axios
			.get(`forecast?units=m&forecast_days=1&hourly=1&query=${this.query}`, { params })
			.then(({ data }) => data)
			.catch(error => {
				throw Error(404);
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

// axios.defaults.baseURL = 'http://api.weatherstack.com/';
// const params = { access_key: '2623b33751e9d4766243ed71636880f3' };

// export default {
// 	query: '',

// fetchCurrentWeatherByQuery() {
// 	return axios
// 		.get(`current?units=m&query=${this.query}`, { params })
// 		.then(({ data }) => data)
// 		.catch(error => {
// 			throw Error(404);
// 		});
// },

// 	fetchCurrentWeatherByGPS() {},

// 	fetchForecastWeather() {
// 		axios
// 			.get(`forecast?units=m&forecast_days=1&hourly=1&query=${this.query}`, { params })
// 			.then(({ data }) => data)
// 			.catch(error => {
// 				throw Error(404);
// 			});
// 	},

// 	/**
// 	 * @param {string} query
// 	 */
// 	set searchQuery(query) {
// 		this.query = query;
// 	},
// };
