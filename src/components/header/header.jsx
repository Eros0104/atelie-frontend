import React from "react";
import { StyledHeader } from "./header.styles";

const Header = ({ children, backgroundImage }) => (
  <StyledHeader backgroundImage={backgroundImage}>
    {children}
  </StyledHeader>
);

export default Header;
