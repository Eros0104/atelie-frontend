import React from "react";
import { StyledP } from "./p.styles";

const P = ({ children, white, ...props }) => (
  <StyledP {...props} white={white} >{children}</StyledP>
);

export default P;
