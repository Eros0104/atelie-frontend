import React from "react";
import { StyledColumn } from "./column.styles";

const Column = ({ children, flex }) => (
  <StyledColumn flex={flex}>{children}</StyledColumn>
);

export default Column;
