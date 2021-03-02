import React from "react";
import { StyledSection } from "./section.styles";

const Section = ({ children, backgroundImage }) => (
  <StyledSection backgroundImage={backgroundImage}>{children}</StyledSection>
);

export default Section;
