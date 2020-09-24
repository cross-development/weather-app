import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	background-color: #fff;
	border-radius: 3px;
	overflow: hidden;
	grid-area: search;
	padding: 0 50px;
`;

export const Div = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	background-color: #fff;
	border-radius: 50px;
	overflow: hidden;
	grid-area: search;
`;

export const Button = styled.button`
	display: inline-block;
	width: 48px;
	height: 38px;
	border: 0;
	background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
	/* background-image: url('../../assets/search.svg'); */
	background-size: 40%;
	background-repeat: no-repeat;
	background-position: center;
	opacity: 0.6;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;
`;

export const Span = styled.span`
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

export const Input = styled.input`
	display: inline-block;
	width: 100%;
	height: 38px;
	font: inherit;
	font-size: 20px;
	border: none;
	outline: none;
	padding-left: 4px;
	padding-right: 4px;
	background: #fafafa;
`;

// .searchFormButton:hover {
// 	opacity: 1;
// }

// .searchFormInput::placeholder {
// 	font: inherit;
// 	font-size: 18px;
// }

// .searchFormInput::-webkit-input-placeholder {
// 	opacity: 1;
// 	transition: opacity 0.3s ease;
// }

// .searchFormInput::-moz-placeholder {
// 	opacity: 1;
// 	transition: opacity 0.3s ease;
// }

// .searchFormInput:-moz-placeholder {
// 	opacity: 1;
// 	transition: opacity 0.3s ease;
// }

// .searchFormInput:-ms-input-placeholder {
// 	opacity: 1;
// 	transition: opacity 0.3s ease;
// }

// .searchFormInput:focus::-webkit-input-placeholder {
// 	opacity: 0;
// 	transition: opacity 0.3s ease;
// }

// .searchFormInput:focus::-moz-placeholder {
// 	opacity: 0;
// 	transition: opacity 0.3s ease;
// }

// .searchFormInput:focus:-moz-placeholder {
// 	opacity: 0;
// 	transition: opacity 0.3s ease;
// }

// .searchFormInput:focus:-ms-input-placeholder {
// 	opacity: 0;
// 	transition: opacity 0.3s ease;
// }
