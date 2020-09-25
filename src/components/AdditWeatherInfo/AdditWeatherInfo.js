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
	const { humidity, precip, wind_dir, wind_speed, uv_index } = data;

	return (
		<StyledUL>
			<StyledLI>
				<StyledDiv>
					<FontAwesomeIcon icon="water" size="2x" />
				</StyledDiv>
				<StyledDiv>
					<StyledTitle>Humidity</StyledTitle>
					<StyledValue>{humidity} %</StyledValue>
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
						{wind_dir} {wind_speed} km/h
					</StyledValue>
				</StyledDiv>
			</StyledLI>

			<StyledLI>
				<StyledDiv>
					<FontAwesomeIcon icon="sun" size="2x" />
				</StyledDiv>
				<StyledDiv>
					<StyledTitle>UV Index</StyledTitle>
					<StyledValue>{uv_index}</StyledValue>
				</StyledDiv>
			</StyledLI>
		</StyledUL>
	);
};

AdditWeatherInfo.propTypes = {
	data: PropTypes.shape({
		precip: PropTypes.number.isRequired,
		humidity: PropTypes.number.isRequired,
		wind_dir: PropTypes.string.isRequired,
		uv_index: PropTypes.number.isRequired,
		wind_speed: PropTypes.number.isRequired,
	}).isRequired,
};

export default AdditWeatherInfo;
