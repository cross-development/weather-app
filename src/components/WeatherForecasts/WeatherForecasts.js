//Core
import React, { useState } from 'react';
//Components
import WeatherList from '../WeatherList';
import Notification from '../Notification';
import WeatherCategory from '../WeatherCategory';
//Services
import weatherAPI from 'services';
//Styles
import { StyledSection } from './WeatherForecasts.styles';

const WeatherForecasts = () => {
	const [error, setError] = useState(null);
	const [forecast, setForecast] = useState(null);

	const getForecastWeather = () => {
		weatherAPI
			.fetchForecastWeather()
			.then(({ status, data, statusText }) =>
				status === 200 ? setForecast(data.data) : setError(statusText),
			)
			.catch(error => setError(error));
	};

	return (
		<StyledSection>
			<WeatherCategory onGetForecast={getForecastWeather} />

			{error && <Notification message={error.message || error} />}

			{!error && forecast && <WeatherList weatherData={forecast} />}
		</StyledSection>
	);
};

export default WeatherForecasts;
