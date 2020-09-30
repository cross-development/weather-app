//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import MainWeatherInfo from '../MainWeatherInfo';
import AdditWeatherInfo from '../AdditWeatherInfo';
//Styles
import { StyledSection } from './WeatherDetails.styles';

const WeatherDetails = ({ weatherData }) => {
	const { city_name, country_code, temp, weather, app_temp, ...additionalInfo } = weatherData;

	return (
		<StyledSection>
			<MainWeatherInfo
				temperature={temp}
				feelsTemp={app_temp}
				cityName={city_name}
				weatherIcon={weather}
				countryCode={country_code}
			/>

			<AdditWeatherInfo data={additionalInfo} />
		</StyledSection>
	);
};

WeatherDetails.propTypes = {
	weatherData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WeatherDetails;
