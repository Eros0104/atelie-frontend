import React from 'react';
import { StyledSelect, StyledLabel, StyledItem, StyledFormControl } from './select.styles';

const generateOptions = (options) => (
  options.map(o => (
    <StyledItem value={o.value}>{o.name}</StyledItem>
  ))
);

const Select = ({ children, options, required, label, error, ...props }) => (
  <StyledFormControl error={error} fullWidth>
    <StyledLabel shrink id="demo-simple-select-placeholder-label-label">
      {label}
    </StyledLabel>
    <StyledSelect
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