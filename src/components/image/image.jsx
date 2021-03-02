import React from "react";
import { StyledRow } from "./image.styles";

const Row = ({ children, image}) => (
  <StyledRow src={image}>{children}</StyledRow>
);

export default Row;
