import styled from "styled-components";
import { breakpoints } from '@assets';

const getWidth = ({ width }, breakpoint) => width && (width[breakpoint] || width.default)

const StyledContainer = styled.div`
  margin: 0 auto;
  overflow: auto;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

export { StyledContainer };
