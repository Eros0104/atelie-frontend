import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './container.styles';
import { breakpoints } from '@assets';

const Container = ({ children, maxWidth, ...props }) => (
  <StyledContainer {...props} maxWidth={maxWidth}>{children}</StyledContainer>
);

Container.defaultProps = {
  maxWidth: breakpoints.md + "px",
}

Container.propTypes = {
  maxWidth: PropTypes.string,
};

export default Container;
