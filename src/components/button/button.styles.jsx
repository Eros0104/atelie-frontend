import styled, { css } from "styled-components";
import { colors } from "../../assets";

const defaultStyle = css`
  background-color: ${colors.primary};
  cursor: pointer;
  :hover {
    background-color: ${colors.darkPrimary};
  }
`;

const disabledStyle = css`
  cursor: default;
  background-color: ${colors.grey};
  color: ${colors.darkGrey};
  border: 2px solid ${colors.darkGrey};
`;

const StyledButton = styled.button`
  color: ${colors.white};
  border-radius: 4px;
  height: 48px;
  font-weight: bold;
  font-size: 18px;
  padding: 0 24px;
  border: 0px;
  text-transform: uppercase;
  transition: all 150ms;
  ${({ disabled }) => (disabled ? disabledStyle : defaultStyle)}
  ${({ w100 }) => w100 && "width: 100%;"}
`;

export { StyledButton };
