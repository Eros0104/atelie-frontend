import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { colors, fontSize } from '@assets';

const StyledSelect = styled(Select)`
  label {
    font-size: ${fontSize.label};
  }
  input{
    font-size: ${fontSize.input}
  }
  input, label {
    color: ${colors.white};
  }
  div:before {
    border-bottom: ${colors.white} 3px solid;
  }
  div:hover:not(.Mui-disabled)::before {
    border-bottom: ${colors.white} 3px solid;
  }
  div:after {
    border-bottom: ${colors.primary} 3px solid;
  }
`;

const StyledLabel = styled(InputLabel)``;

const StyledItem = styled(MenuItem)``;

const StyledFormControl = styled(FormControl)``;

export { StyledSelect, StyledLabel, StyledItem, StyledFormControl };
