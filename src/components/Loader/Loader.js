//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import PulseLoader from 'react-spinners/PulseLoader';
//Styles
import { css } from '@emotion/core';

const override = css`
	display: block;
	margin: 16% auto;
	text-align: center;
`;

const Loader = ({ isLoading }) => (
	<PulseLoader css={override} size={30} color={'#fff'} margin={2} loading={isLoading} />
);

Loader.propTypes = {
	isLoading: PropTypes.bool.isRequired,
};

export default Loader;
