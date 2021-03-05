import React from 'react';
import InputMask from 'react-input-mask';
import { Input } from '@components';

const CPF = ({ name, error, noLabel, placeholder, ...props }) => (
  <InputMask
    mask="999.999.999-99"
    disabled={false}
    maskChar={null}
    {...props}
  >
    {() => <Input
      label={!noLabel && "CPF"}
      name={name}
      placeholder={placeholder || "000.000.000-00"}
      error={error} 
    />}
  </InputMask>
);

export default CPF
