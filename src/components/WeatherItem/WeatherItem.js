//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLI, StyledDayP, StyledTempP, StyledDescP, StyledImg } from './WeatherItem.styles';

const WeatherItem = ({ additionalInfo }) => {
	const { valid_date, weather, temp } = additionalInfo;

	const day = valid_date.split('-').reverse().join('-');

	return (
		<StyledLI>
			<StyledDayP>{day}</StyledDayP>
			<StyledImg src={`${process.env.PUBLIC_URL}/icons/${weather.icon}.png`} alt="img" />
			<StyledTempP>{temp} &#176;C</StyledTempP>
			<StyledDescP>{weather.description}</StyledDescP>
		</StyledLI>
	);
};

WeatherItem.propTypes = {
	additionalInfo: PropTypes.shape({
		temp: PropTypes.number.isRequired,
		valid_date: PropTypes.string.isRequired,
		weather: PropTypes.shape({
			icon: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
};

export default WeatherItem;
