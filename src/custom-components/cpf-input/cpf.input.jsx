import React from 'react';
import InputMask from 'react-input-mask';
import { Input } from '@components';

const CPF = ({ name, error, ...props }) => (
  <InputMask
    mask="999.999.999-99"
    disabled={false}
    maskChar={null}
    {...props}
  >
    {() => <Input
      label="CPF"
      name={name}
      placeholder="000.000.000-00"
      error={error} 
    />}
  </InputMask>
);

export default CPF
