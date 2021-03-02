import styled from "styled-components";
import { colors } from "../../assets";

const StyledInput = styled.input`
  color: ${colors.white};
  border: 0;
  border-bottom: 4px solid ${colors.white};
  background: none;
  width: 100%;
  font-size: 28pt;
  transition: all 150ms;
  :focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export { StyledInput };
