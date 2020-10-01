//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledDiv, StyledButton } from './WeatherCategory.styles';

const WeatherCategory = ({ onGetForecast }) => (
	<StyledDiv>
		<StyledButton onClick={onGetForecast}>Daily forecast</StyledButton>
	</StyledDiv>
);

WeatherCategory.propTypes = {
	onGetForecast: PropTypes.func.isRequired,
};

export default WeatherCategory;
