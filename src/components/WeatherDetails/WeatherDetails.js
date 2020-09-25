//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import MainWeatherInfo from '../MainWeatherInfo';
import AdditWeatherInfo from '../AdditWeatherInfo';
//Styles
import { StyledSection } from './WeatherDetails.styles';

const WeatherDetails = ({ weatherData }) => {
	const { name, country } = weatherData.location;
	const { weather_code, temperature, observation_time, ...additionalInfo } = weatherData.current;

	return (
		<StyledSection>
			<MainWeatherInfo
				name={name}
				country={country}
				temperature={temperature}
				weatherCode={weather_code}
				observationTime={observation_time}
			/>

			<AdditWeatherInfo data={additionalInfo} />
		</StyledSection>
	);
};

WeatherDetails.propTypes = {
	weatherData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default WeatherDetails;
