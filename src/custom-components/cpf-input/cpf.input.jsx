import React from 'react';
import InputMask from 'react-input-mask';
import { Input } from '@components';

const CustomFooter = () => (
  <InputMask
    mask="999.999.999-99"
    disabled={false}
    maskChar={null}
  >
    {() => <Input
      label="CPF"
      placeholder="000.000.000-00"
    />}
  </InputMask>
);

export default CustomFooter
