//API
import weatherAPI from './weatherAPI';

export const setSearchParams = (query, countryCode) => {
	weatherAPI.searchQuery = query;
	weatherAPI.code = countryCode;
};

export const getCurrentWeather = (setWeather, setError, setLoading) => {
	setLoading(true);

	weatherAPI
		.fetchCurrentWeatherByQuery()
		.then(({ status, data, statusText }) =>
			status === 200 ? setWeather(...data.data) : setError(statusText),
		)
		.catch(error => setError(error))
		.finally(() => setLoading(false));
};

export const getForecastWeather = (setForecast, setError) => {
	console.log('object');
	weatherAPI
		.fetchForecastWeather()
		.then(({ status, data, statusText }) =>
			status === 200 ? setForecast(data.data) : setError(statusText),
		)
		.catch(error => setError(error));
};
