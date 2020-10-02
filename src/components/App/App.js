//Core
import React, { useState, useEffect } from 'react';
//Components
import Layout from '../Layout';
import Loader from '../Loader';
import SearchForm from '../SearchForm';
import Notification from '../Notification';
import WeatherDetails from '../WeatherDetails';
import WeatherForecasts from '../WeatherForecasts';
//Services
import { getCurrentWeather, setSearchParams } from 'services';

const App = () => {
	const [error, setError] = useState(null);
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		if (!searchQuery) return;

		getCurrentWeather(setWeather, setError, setLoading);
	}, [searchQuery]);

	const handleFormSubmit = (query, countryCode) => {
		setSearchParams(query, countryCode);

		setSearchQuery(query);
		setWeather(null);
		setError(null);
	};

	return (
		<>
			<SearchForm onSubmit={handleFormSubmit} />

			<Layout>
				{loading && <Loader isLoading={loading} />}

				{error && <Notification message={error.message || error} />}

				{!loading && weather && <WeatherDetails weatherData={weather} />}

				{!loading && weather && <WeatherForecasts />}
			</Layout>
		</>
	);
};

export default App;
