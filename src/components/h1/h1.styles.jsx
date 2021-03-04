import styled from "styled-components";
import { fontSize, colors } from "@assets";

const StyledH1 = styled.h1`
  font-size: ${fontSize.h1};
  ${({ white }) => white && `color: ${colors.white} ;`}
  text-transform: uppercase;
`;

export { StyledH1 };
