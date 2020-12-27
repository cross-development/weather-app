//Core
import React from 'react';
import PropTypes from 'prop-types';
import countriesCode from 'data/countriesCode.json';
//Styles
import { StyledTempP, StyledSubtitleP } from './MainWeatherInfo.styles';
import { StyledDiv, StyledImg, StyledTitleP } from './MainWeatherInfo.styles';

const MainWeatherInfo = ({ cityName, countryCode, weatherIcon, feelsTemp, temperature }) => {
	const { label: country } = countriesCode.find(({ code }) => code === countryCode);

	return (
		<StyledDiv>
			<StyledImg src={`${process.env.PUBLIC_URL}/icons/${weatherIcon.icon}.png`} alt="img" />
			<StyledTitleP>{cityName}</StyledTitleP>
			<StyledSubtitleP>{country}</StyledSubtitleP>
			<StyledTempP>{temperature} &#176;C</StyledTempP>
			<StyledSubtitleP>Feels like {feelsTemp} &#176;C</StyledSubtitleP>
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
