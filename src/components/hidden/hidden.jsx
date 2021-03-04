import React from 'react';
import { StyledHidden } from './hidden.styles';

const Hidden = ({ children, ...props }) => (
  <StyledHidden {...props}>
    {children}
  </StyledHidden>
);

export default Hidden;
