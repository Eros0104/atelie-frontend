import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { colors, fontSize } from '@assets';

const StyledSelect = styled(Select)`
  div:focus {
    background: none;
  }
  div{
    font-size: ${fontSize.input};
    color: ${colors.white};
  }
  svg{
    color: ${colors.white};
  }
  :hover:not(.Mui-disabled)::before {
    border-bottom: ${colors.white} 3px solid;
  }
  :before {
    border-bottom: ${colors.white} 3px solid;
  }
  :after {
    border-bottom: ${colors.primary} 3px solid;
  }
`;

const StyledLabel = styled(InputLabel)`
  font-size: ${fontSize.label};
  color: ${colors.white};
`;

const StyledItem = styled(MenuItem)``;

const StyledFormControl = styled(FormControl)``;

export { StyledSelect, StyledLabel, StyledItem, StyledFormControl };
