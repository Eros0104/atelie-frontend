import styled from "styled-components";
import { fontSize, colors } from "@assets";

const StyledP = styled.p`
  font-size: ${fontSize.p};
  ${({ white }) => white && `color: ${colors.white} ;`}
`;

export { StyledP };
