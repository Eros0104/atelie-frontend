import React from 'react';
import { StyledFooter, BottomContainer, MainFooter } from './footer.styles';

const Footer = ({ children, backgroundImage }) => (
  <StyledFooter backgroundImage={backgroundImage}>
    {children}
  </StyledFooter>
);

Footer.Main = ({ children }) => (
  <MainFooter>
    {children}
  </MainFooter>
);

Footer.Bottom = ({ children }) => (
  <BottomContainer>
    {children}
  </BottomContainer>
);

export default Footer;
