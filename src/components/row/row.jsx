import React from "react";
import { StyledRow } from "./row.styles";

const Row = ({ children, noMargin }) => (
  <StyledRow>{children}</StyledRow>
);

export default Row;
