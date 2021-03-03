import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ children, w100, ...props }) => (
  <StyledButton {...props} w100={w100}>{children}</StyledButton>
);

export default Button;
