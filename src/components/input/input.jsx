import React from "react";
import { StyledInput } from "./input.styles";

const Input = ({ children, ...props }) => (
  <StyledInput {...props}>{children}</StyledInput>
);

export default Input;
