//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import WeatherItem from '../WeatherItem';
//Styles
import { StyledUL } from './WeatherList.styles';

const WeatherList = ({ type, weatherData }) => {
	return (
		<StyledUL>
			{weatherData.map(item => (
				<WeatherItem key={item} additionalInfo={item} />
			))}
		</StyledUL>
	);
};

WeatherList.propTypes = {
	weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeatherList;
