//Core
import React from 'react';
import PropTypes from 'prop-types';
import countriesCode from 'data/countriesCode.json';
//Styles
import {
	StyledDiv,
	StyledImg,
	StyledNameP,
	StyledTempP,
	StyledCountryP,
} from './MainWeatherInfo.styles';

const MainWeatherInfo = ({ cityName, countryCode, weatherIcon, feelsTemp, temperature }) => {
	const { name: country } = countriesCode.find(({ code }) => code === countryCode);

	return (
		<StyledDiv>
			<StyledImg icon={weatherIcon.icon} />
			<StyledNameP>{cityName}</StyledNameP>
			<StyledCountryP>{country}</StyledCountryP>
			<StyledTempP>{temperature} &#176;C</StyledTempP>
			<StyledNameP>Feels like {feelsTemp} &#176;C</StyledNameP>
		</StyledDiv>
	);
};

MainWeatherInfo.propTypes = {
	cityName: PropTypes.string.isRequired,
	feelsTemp: PropTypes.number.isRequired,
	countryCode: PropTypes.string.isRequired,
	temperature: PropTypes.number.isRequired,
	weatherIcon: PropTypes.shape({
		icon: PropTypes.string.isRequired,
		code: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
};

export default MainWeatherInfo;
