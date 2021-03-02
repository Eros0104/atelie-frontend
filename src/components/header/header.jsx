import React from "react";
import { StyledSection } from "./header.styles";

const Section = ({ children, backgroundImage }) => (
  <StyledSection backgroundImage={backgroundImage}>{children}</StyledSection>
);

export default Section;
