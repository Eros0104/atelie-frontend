import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { colors } from "@assets";

const StyledInput = styled(TextField)`
  input{
    color: ${colors.white};
  }
`;

export { StyledInput };
