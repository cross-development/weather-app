//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledDiv, StyledP } from './Notification.styles';

const Notification = ({ message }) => (
	<StyledDiv>
		{`${message}` === 'Failed to fetch' ? (
			<>
				<StyledP>Sorry!</StyledP>
				<StyledP>
					Check your internet connection and try again. We couldn't connect to the server.
				</StyledP>
			</>
		) : (
			<StyledP>{message}</StyledP>
		)}
	</StyledDiv>
);

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Notification;
