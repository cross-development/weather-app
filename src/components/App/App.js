//Core
import React, { useState, useEffect } from 'react';
//Components
import Loader from '../Loader';
import SearchForm from '../SearchForm';
import WeatherDetails from '../WeatherDetails';
//Services
import weatherAPI from 'services';

const App = () => {
	const [error, setError] = useState(null);
	const [weather, setWeather] = useState('');
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		if (searchQuery) {
			setLoading(true);

			weatherAPI
				.fetchCurrentWeatherByQuery()
				.then(weather => setWeather(weather))
				.catch(error => setError(error))
				.finally(() => setLoading(false));

			return;
		}

		// const position = ({ coords }) => {
		// 	console.log(coords);
		// };

		// navigator.geolocation.getCurrentPosition(position);
	}, [searchQuery]);

	const handleFormSubmit = query => {
		weatherAPI.searchQuery = query;

		setSearchQuery(query);
		setWeather('');
	};

	return (
		<>
			<SearchForm onSubmit={handleFormSubmit} />

			{loading && <Loader isLoading={loading} />}

			{weather && <WeatherDetails weatherData={weather} />}
		</>
	);
};

export default App;
