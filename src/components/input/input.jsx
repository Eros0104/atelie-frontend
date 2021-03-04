import React from 'react';
import { StyledInput } from './input.styles';

const Input = ({ children, ...props }) => (
  <StyledInput
    fullWidth
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />
);

export default Input;
