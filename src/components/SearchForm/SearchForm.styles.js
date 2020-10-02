import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	border-radius: 3px;
	overflow: hidden;
	padding: 0 50px;
	margin: 0 auto 3rem;
`;

export const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	border-radius: 50px;
	overflow: hidden;
`;

export const StyledButton = styled.button`
	display: inline-block;
	width: 48px;
	height: 38px;
	border: 0;
	background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
	background-size: 40%;
	background-repeat: no-repeat;
	background-position: center;
	opacity: 0.6;
	transition: opacity 250ms linear;
	cursor: pointer;
	outline: none;
	background-color: rgba(0, 0, 0, 0.3);

	&:hover {
		opacity: 0.9;
	}
`;

export const StyledSpan = styled.span`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	clip-path: inset(50%);
	border: 0;
`;

export const StyledInput = styled.input`
	display: inline-block;
	width: 100%;
	height: 38px;
	font: inherit;
	font-size: 20px;
	line-height: 24px;
	border: none;
	outline: none;
	padding-left: 4px;
	padding-right: 4px;
	color: #fff;
	background: rgba(0, 0, 0, 0.2);

	&::placeholder {
		font: inherit;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.7);
	}

	&::-webkit-input-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&::-moz-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&:-moz-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&:-ms-input-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&:focus::-webkit-input-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:focus::-moz-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:focus:-moz-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:focus:-ms-input-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}
`;

export const StyledSelectWrapper = styled.div`
	width: 50%;
`;
