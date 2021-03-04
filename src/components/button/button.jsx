import React from 'react';
import { StyledButton } from './button.styles';

const Button = ({ children, w100, ...props }) => (
  <StyledButton {...props} fullWidth={w100} disableElevation color="primary" variant="contained">{children}</StyledButton>
);

export default Button;
