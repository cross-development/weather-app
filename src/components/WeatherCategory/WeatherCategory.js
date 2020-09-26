//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledDiv, StyledButton } from './WeatherCategory.styles';

const WeatherCategory = ({ onSetForecastType }) => {
	return (
		<StyledDiv>
			<StyledButton onClick={() => onSetForecastType('daily')}>Daily</StyledButton>
			<StyledButton onClick={() => onSetForecastType('hourly')}>Hourly</StyledButton>
		</StyledDiv>
	);
};

WeatherCategory.propTypes = {
	onSetForecastType: PropTypes.func.isRequired,
};

export default WeatherCategory;
