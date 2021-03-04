import React from "react";
import { StyledH1 } from "./h1.styles";

const H1 = ({ children, white, ...props }) => (
  <StyledH1 {...props} white={white}>{children}</StyledH1>
);

export default H1;
