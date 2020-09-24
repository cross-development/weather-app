//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import WeatherItem from '../WeatherItem';
//Styles
import { UL } from './WeatherList.styles';

const WeatherList = ({ weatherData }) => (
	<UL>
		{weatherData.map(item => (
			<WeatherItem key={item.id} additionalInfo={item} />
		))}
	</UL>
);

WeatherList.propTypes = {
	weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeatherList;
