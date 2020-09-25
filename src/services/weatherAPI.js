//Core
import axios from 'axios';

axios.defaults.baseURL = 'http://api.weatherstack.com/';
const params = { access_key: '2623b33751e9d4766243ed71636880f3' };

export default {
	query: '',

	coords: {
		latitude: null,
		longitude: null,
	},

	fetchCurrentWeatherByQuery() {
		return axios
			.get(`current?units=m&query=${this.query}`, { params })
			.then(({ data }) => data)
			.catch(error => {
				throw Error(404);
			});
	},

	fetchCurrentWeatherByGPS() {},

	fetchDailyForecastWeather() {
		axios
			.get(`onecall?lat=${this.coords.lat}&lon=${this.coords.lon}&exclude=daily`, { params })
			.then(({ data }) => data)
			.catch(error => {
				throw Error(404);
			});
	},

	fetchHourlyForecastWeather() {
		axios
			.get(`onecall?lat=${this.coords.latitude}&lon=${this.coords.longitude}&exclude=hourly`, {
				params,
			})
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
	 * @param {{ lat: any; lon: any; }} coords
	 */
	set locationCoords({ coords }) {
		this.coords = coords;
	},
};

// const fetchCurrentWeatherByGPS = () => {};

// const fetchDailyForecastWeather = () => {};

// const fetchHourlyForecastWeather = () => {
// 	axios.get(`forecast/hourly?q=${query}`, { params }).then(console.log);
// };

// export default {
// 	fetchCurrentWeatherByGPS,
// 	fetchDailyForecastWeather,
// 	fetchHourlyForecastWeather,
// 	fetchCurrentWeatherByQuery,
// };
