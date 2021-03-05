import React from 'react';
import { StyledInput } from './input.styles';

const Input = ({ children, error, ...props }) => (
  <StyledInput
    fullWidth
    error={error}
    helperText={error}
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />
);

export default Input;
