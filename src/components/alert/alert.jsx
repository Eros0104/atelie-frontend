import React from 'react';
import { StyledAlert } from './alert.styles';

const Alert = ({ children, ...props }) => (
  <StyledAlert {...props}>{children}</StyledAlert>
);

export default Alert;
