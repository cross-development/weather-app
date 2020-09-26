//Core
import React, { useState, useEffect } from 'react';
//Components
import Loader from '../Loader';
import SearchForm from '../SearchForm';
import Notification from '../Notification';
import WeatherDetails from '../WeatherDetails';
import WeatherForecasts from '../WeatherForecasts';
//Services
import weatherAPI from 'services';

const App = () => {
	const [error, setError] = useState(null);
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		if (!searchQuery) return;

		setLoading(true);

		weatherAPI
			.fetchCurrentWeatherByQuery()
			.then(weather => (weather.error ? setError(weather.error) : setWeather(weather)))
			.catch(error => setError(error))
			.finally(() => setLoading(false));
	}, [searchQuery]);

	const handleFormSubmit = query => {
		weatherAPI.searchQuery = query;
		setSearchQuery(query);
		setWeather(null);
		setError(null);
	};

	return (
		<>
			<SearchForm onSubmit={handleFormSubmit} />

			{loading && <Loader isLoading={loading} />}

			{error && <Notification message={error.message || error.info} />}

			{!loading && weather && <WeatherDetails weatherData={weather} />}
		</>
	);
};

export default App;
