//Core
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Components
import WeatherItem from '../WeatherItem';
//Styles
import { StyledUL } from './WeatherList.styles';
import fadeForecast from 'animations/fadeForecast.module.css';

const WeatherList = ({ weatherData }) => (
	<TransitionGroup component={StyledUL}>
		{weatherData.map(
			(item, idx) =>
				idx < 7 && (
					<CSSTransition key={item.valid_date} timeout={250} classNames={fadeForecast}>
						<WeatherItem key={item.ts} additionalInfo={item} />
					</CSSTransition>
				),
		)}
	</TransitionGroup>
);

WeatherList.propTypes = {
	weatherData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default WeatherList;
