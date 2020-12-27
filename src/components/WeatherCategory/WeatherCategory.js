//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledDiv, StyledButton } from './WeatherCategory.styles';

const WeatherCategory = ({ onGetForecast, isLoaded }) => (
	<StyledDiv>
		<StyledButton onClick={onGetForecast} disabled={isLoaded}>
			Daily forecast
		</StyledButton>
	</StyledDiv>
);

WeatherCategory.propTypes = {
	onGetForecast: PropTypes.func.isRequired,
	isLoaded: PropTypes.bool.isRequired,
};

export default WeatherCategory;
