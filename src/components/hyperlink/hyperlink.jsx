import React from 'react';
import { StyledA } from './hyperlink.styles';

const Hyperlink = ({ children, ...props }) => (
  <StyledA {...props} >{children}</StyledA>
);

export default Hyperlink;
