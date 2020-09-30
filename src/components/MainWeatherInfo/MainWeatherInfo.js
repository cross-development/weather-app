//Core
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
//Utils
import { getIconUrl } from 'utils';
//Styles
import { StyledDiv, StyledNameP, StyledTempP, StyledCountryP } from './MainWeatherInfo.styles';

library.add(fas);

const MainWeatherInfo = ({ name, country, weatherIcon, observationTime, temperature }) => {
	const iconUrl = getIconUrl(weatherIcon.icon);

	return (
		<StyledDiv>
			<img src={iconUrl} alt={weatherIcon.description} />
			<StyledNameP>{name}</StyledNameP>
			<StyledCountryP>{country}</StyledCountryP>
			<StyledTempP>{temperature} &#176;C</StyledTempP>
		</StyledDiv>
	);
};

MainWeatherInfo.propTypes = {
	name: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	weatherCode: PropTypes.number.isRequired,
};

export default MainWeatherInfo;
