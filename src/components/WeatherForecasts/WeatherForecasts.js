//Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//Components
import WeatherList from '../WeatherList';
import WeatherCategory from '../WeatherCategory';
//Services
import weatherAPI from 'services';
//Styles
import { StyledSection } from './WeatherForecasts.styles';

//! Этот блок не подключен. Перепроверить useEffect, т.к. проходит зацикливание

const WeatherForecasts = () => {
	const [error, setError] = useState(null);
	const [forecast, setForecast] = useState(null);
	const [forecastType, setForecastType] = useState('daily');

	useEffect(() => {
		weatherAPI
			.fetchForecastWeather()
			.then(weather => (weather.error ? setError(weather.error) : setForecast(weather)))
			.catch(error => setError(error));
	}, [forecast]);

	const handleForecastType = type => setForecastType(type);

	return (
		<StyledSection>
			<WeatherCategory onSetForecastType={handleForecastType} />

			{!error && <WeatherList type={forecastType} weatherData={forecast} />}
		</StyledSection>
	);
};

WeatherForecasts.propTypes = {};

export default WeatherForecasts;
