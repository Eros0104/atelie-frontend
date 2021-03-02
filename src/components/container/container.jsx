import React from "react";
import { StyledContainer } from "./container.styles";

const Container = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

export default Container;
