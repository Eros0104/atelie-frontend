import React from 'react';
import { StyledRow } from './image.styles';

const Row = ({ children, image, maxWidth, margin}) => (
  <StyledRow src={image} maxWidth={maxWidth} margin={margin}>{children}</StyledRow>
);

export default Row;
