import React from "react";
import { StyledRow } from "./image.styles";

const Row = ({ children, image, maxWidth}) => (
  <StyledRow src={image} maxWidth={maxWidth}>{children}</StyledRow>
);

export default Row;
