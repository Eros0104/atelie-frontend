import React from "react";
import { StyledSection } from "./section.styles";

const Section = ({ children, backgroundImage, ...props }) => (
  <StyledSection {...props} backgroundImage={backgroundImage}>
    {children}
  </StyledSection>
);

export default Section;
