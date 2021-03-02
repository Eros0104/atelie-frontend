import React from "react";
import { StyledH1 } from "./h2.styles";

const H1 = ({ children, ...props }) => (
  <StyledH1 {...props}>{children}</StyledH1>
);

export default H1;
