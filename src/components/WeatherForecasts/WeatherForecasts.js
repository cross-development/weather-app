//Core
import React, { useState } from 'react';
//Components
import WeatherList from '../WeatherList';
import Notification from '../Notification';
import WeatherCategory from '../WeatherCategory';
//Services
import { getForecastWeather } from 'services';
//Styles
import { StyledSection } from './WeatherForecasts.styles';

const WeatherForecasts = () => {
	const [error, setError] = useState(null);
	const [forecast, setForecast] = useState(null);

	const getWeather = () => getForecastWeather(setForecast, setError);

	return (
		<StyledSection>
			<WeatherCategory onGetForecast={getWeather} />

			{error && <Notification message={error.message || error} />}

			{!error && forecast && <WeatherList weatherData={forecast} />}
		</StyledSection>
	);
};

export default WeatherForecasts;
