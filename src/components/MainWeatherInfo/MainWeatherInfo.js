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

const MainWeatherInfo = ({ name, country, weatherCode, observationTime, temperature }) => {
	const iconUrl = getIconUrl(weatherCode, observationTime);

	console.log(iconUrl);

	return (
		<StyledDiv>
			<FontAwesomeIcon icon={iconUrl} size="8x" />
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
