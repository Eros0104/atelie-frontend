import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './container.styles';

const Container = ({ children, maxWidth, ...props }) => (
  <StyledContainer {...props} maxWidth={maxWidth}>{children}</StyledContainer>
);

Container.defaultProps = {
  maxWidth: "900px",
}

Container.propTypes = {
  maxWidth: PropTypes.string,
};

export default Container;
