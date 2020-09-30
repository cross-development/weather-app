//Core
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
//Styles
import { StyledUL, StyledLI, StyledDiv, StyledTitle, StyledValue } from './AdditWeatherInfo.styles';

library.add(fas);

const AdditWeatherInfo = ({ data }) => {
	const { rh, precip, wind_cdir, wind_spd, uv } = data;

	return (
		<StyledUL>
			<StyledLI>
				<StyledDiv>
					<FontAwesomeIcon icon="water" size="2x" />
				</StyledDiv>
				<StyledDiv>
					<StyledTitle>Humidity</StyledTitle>
					<StyledValue>{rh} %</StyledValue>
				</StyledDiv>
			</StyledLI>

			<StyledLI>
				<StyledDiv>
					<FontAwesomeIcon icon="tint" size="2x" />
					<FontAwesomeIcon icon="tint" size="1x" />
				</StyledDiv>
				<StyledDiv>
					<StyledTitle>Precipitation</StyledTitle>
					<StyledValue>{precip} mm</StyledValue>
				</StyledDiv>
			</StyledLI>

			<StyledLI>
				<StyledDiv>
					<FontAwesomeIcon icon="wind" size="2x" />
				</StyledDiv>
				<StyledDiv>
					<StyledTitle>Wind Speed</StyledTitle>
					<StyledValue>
						{wind_cdir} {wind_spd} m/s
					</StyledValue>
				</StyledDiv>
			</StyledLI>

			<StyledLI>
				<StyledDiv>
					<FontAwesomeIcon icon="sun" size="2x" />
				</StyledDiv>
				<StyledDiv>
					<StyledTitle>UV Index</StyledTitle>
					<StyledValue>{uv}</StyledValue>
				</StyledDiv>
			</StyledLI>
		</StyledUL>
	);
};

AdditWeatherInfo.propTypes = {
	data: PropTypes.shape({
		rh: PropTypes.number.isRequired,
		uv: PropTypes.number.isRequired,
		precip: PropTypes.number.isRequired,
		wind_spd: PropTypes.number.isRequired,
		wind_cdir: PropTypes.string.isRequired,
	}).isRequired,
};

export default AdditWeatherInfo;
