//Core
import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const StyledButton = styled.button`
	display: block;
	background-color: #fff;
	outline: none;
	border: none;
	padding: 6px 4px;
	color: #000;
	cursor: pointer;
	border-radius: 4px;
	transition-property: all;
	transition-duration: 0.25s;
	transition-timing-function: linear;

	&:hover {
		filter: drop-shadow(0 0 1rem #000);
	}
`;
