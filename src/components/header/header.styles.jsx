import styled from 'styled-components';
import { breakpoints } from '@assets';

const StyledHeader = styled.header`
  width: 100%;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: 100px;
  @media only screen and (max-width: ${breakpoints.md}px) {
    padding-bottom: 100px; 
  }
`;

export { StyledHeader };
