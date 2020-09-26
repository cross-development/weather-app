//Core
import axios from 'axios';

axios.defaults.baseURL = 'http://api.weatherstack.com/';
const params = { access_key: '2623b33751e9d4766243ed71636880f3' };

export default {
	query: '',

	fetchCurrentWeatherByQuery() {
		return axios
			.get(`current?units=m&query=${this.query}`, { params })
			.then(({ data }) => data)
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
};
