import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { colors, fontSize } from '@assets';

const StyledInput = styled(TextField)`
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
`;

export { StyledInput };
