//Core
import React, { useState, useEffect } from 'react';
//Components
import SearchForm from '../SearchForm';
//Services
import weatherAPI from 'services';

const App = () => {
	const [error, setError] = useState(null);
	const [weather, setWeather] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const fetchWeather = () => {
		setLoading(true);

		weatherAPI
			.fetchWeatherByQuery(searchQuery)
			.then(weather => setWeather(weather))
			.catch(error => setError(error))
			.finally(() => setLoading(false));
	};

	const handleFormSubmit = query => {
		setSearchQuery(query);
		setWeather([]);
	};

	return (
		<>
			<SearchForm onSubmit={handleFormSubmit} />
		</>
	);
};

export default App;
