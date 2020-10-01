//Core
import styled from 'styled-components';

export const StyledLI = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
`;

export const StyledDayP = styled.p`
	font-size: 16px;
`;

export const StyledTempP = styled.p`
	font-size: 20px;
	font-weight: 700;
`;

export const StyledDescP = styled.p`
	font-size: 14px;
`;

export const StyledImg = styled.div`
	background-image: url(${props => `../../assets/icons/${props.icon}.png`});
	display: block;
	width: 50px;
	height: 50px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;
