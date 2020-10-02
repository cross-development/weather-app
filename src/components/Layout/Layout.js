//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledMain } from './Layout.styles';

const Layout = ({ children }) => <StyledMain>{children}</StyledMain>;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
