//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import WeatherItem from '../WeatherItem';
//Styles
import { StyledUL } from './WeatherList.styles';

const WeatherList = ({ weatherData }) => (
	<StyledUL>
		{weatherData.map((item, idx) => idx < 7 && <WeatherItem key={item.ts} additionalInfo={item} />)}
	</StyledUL>
);

WeatherList.propTypes = {
	weatherData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default WeatherList;
