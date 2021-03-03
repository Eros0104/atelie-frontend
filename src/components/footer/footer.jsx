import React from "react";
import { StyledFooter, BottomContainer } from "./footer.styles";

const Footer = ({ children, backgroundImage }) => (
  <StyledFooter backgroundImage={backgroundImage}>
    {children}
  </StyledFooter>
);

Footer.Bottom = ({children}) => (
  <BottomContainer>
    {children}
  </BottomContainer>
);  

export default Footer;
