import React from 'react';
import { StyledA } from './hyperlink.styles';

const Hyperlink = ({ children, primary, ...props }) => (
  <StyledA primary={primary} {...props} >{children}</StyledA>
);

export default Hyperlink;
