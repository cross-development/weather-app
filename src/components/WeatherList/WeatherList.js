//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import WeatherItem from '../WeatherItem';
//Styles
import { StyledUL } from './WeatherList.styles';

const WeatherList = ({ weatherData }) => (
	<StyledUL>
		{weatherData.map(item => (
			<WeatherItem key={item.id} additionalInfo={item} />
		))}
	</StyledUL>
);

WeatherList.propTypes = {
	weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeatherList;
