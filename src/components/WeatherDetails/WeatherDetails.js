//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import MainWeatherInfo from '../MainWeatherInfo';
import AdditWeatherInfo from '../AdditWeatherInfo';
//Styles
import { StyledSection } from './WeatherDetails.styles';

const WeatherDetails = ({ weatherData }) => {
	const { city_name, country_code, temp, ob_time, weather, ...additionalInfo } = weatherData;

	return (
		<StyledSection>
			<MainWeatherInfo
				name={city_name}
				temperature={temp}
				country={country_code}
				// observationTime={ob_time}
				weatherIcon={weather}
				// weatherCode={weather.code}
			/>

			<AdditWeatherInfo data={additionalInfo} />
		</StyledSection>
	);
};

WeatherDetails.propTypes = {
	weatherData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WeatherDetails;
