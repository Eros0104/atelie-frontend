import styled from "styled-components";
import { colors, fontSize } from "@assets";

const StyledInput = styled.input`
  color: ${colors.white};
  border: 0;
  border-bottom: 4px solid ${colors.white};
  background: none;
  width: 100%;
  font-size: ${fontSize.input};
  transition: all 150ms;
  :focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export { StyledInput };
