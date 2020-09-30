//Core
import styled from 'styled-components';

export const StyledDiv = styled.div`
	flex: 0 0 20%;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledNameP = styled.p`
	font-size: 1.8rem;
	margin-top: 0.5rem;
`;

export const StyledCountryP = styled.p`
	font-size: 1.3rem;
	margin-bottom: 0.5rem;
`;

export const StyledTempP = styled.p`
	font-size: 3rem;
	line-height: 3rem;
	font-weight: 700;
`;

export const StyledImg = styled.div`
	background-image: url(${props => `../../assets/icons/${props.icon}.png`});
	display: block;
	width: 100px;
	height: 100px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;
