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
  input:placeholder {
    color: ${colors.white};
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

export { StyledInput };
