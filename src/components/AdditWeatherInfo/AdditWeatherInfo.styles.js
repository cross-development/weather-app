//Core
import styled from 'styled-components';

export const StyledUL = styled.ul`
	flex: 0 0 20%;
	list-style: none;
`;

export const StyledLI = styled.li`
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;

	&:not(:last-child) {
		margin-bottom: 1.5rem;
	}
`;

export const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&:first-child {
		flex: 0 0 20%;
		margin-right: 10px;
		flex-direction: row;
		align-items: flex-start;
	}
`;

export const StyledTitle = styled.p`
	font-size: 14px;
	line-height: 22px;
	font-weight: 400;
	display: block;
	width: 100%;
`;

export const StyledValue = styled.p`
	font-size: 20px;
	line-height: 24px;
	font-weight: 700;
	display: block;
	width: 100%;
`;
