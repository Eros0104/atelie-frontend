import styled from 'styled-components';
import { fontSize, colors } from '@assets';

const StyledH1 = styled.h2`
  font-size: ${fontSize.h2};
  text-transform: uppercase;
  text-align: left;
  ${({ white }) => white && `color: ${colors.white} ;`}
  ${({ center }) => center && `text-align: center;`}
`;

export { StyledH1 };
