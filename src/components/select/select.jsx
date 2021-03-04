import React from 'react';
import { StyledSelect, StyledLabel, StyledItem, StyledFormControl } from './select.styles';

const generateOptions = (options) => (
  options.map((o, key) => (
    <StyledItem key={key} value={o.value}>{o.name}</StyledItem>
  ))
);

const Select = ({ options, required, label, error, onChange, value, name }) => (
  <StyledFormControl error={error} fullWidth>
    <StyledLabel shrink id="demo-simple-select-placeholder-label-label">
      {label}
    </StyledLabel>
    <StyledSelect
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
    >
      {
        !required && (
          <StyledItem value="">
            <em>Nenhum</em>
          </StyledItem>
        )
      }
      {
        options && generateOptions(options)
      }
    </StyledSelect>
  </StyledFormControl>
);

export default Select;