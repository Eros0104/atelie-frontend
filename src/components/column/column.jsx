import React from "react";
import { StyledColumn } from "./column.styles";

const Column = ({ children, flex, alignCenter }) => (
  <StyledColumn flex={flex} alignCenter={alignCenter} >{children}</StyledColumn>
);

export default Column;
