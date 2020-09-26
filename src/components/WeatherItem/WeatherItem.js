//Core
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
//Utils
import { getIconUrl } from 'utils';
//Styles
import { StyledLI, StyledDayP, StyledTempP, StyledDescP } from './WeatherItem.styles';

library.add(fas);
//! Пропсы шаблонные, указать точные согласно ответа АПИ

const WeatherItem = ({ forecast }) => {
	const iconUrl = getIconUrl(forecast.weatherCode, forecast.observationTime);

	return forecast.map(item => (
		<StyledLI>
			<StyledDayP>{}</StyledDayP>
			<FontAwesomeIcon icon={iconUrl} size="xs" />
			<StyledTempP>{} &#176;C</StyledTempP>
			<StyledDescP>{}</StyledDescP>
		</StyledLI>
	));
};

WeatherItem.propTypes = {
	forecast: PropTypes.arrayOf(
		PropTypes.shape({
			day: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
			temperature: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default WeatherItem;
