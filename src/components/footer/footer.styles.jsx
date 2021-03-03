import styled from "styled-components";
import { colors } from '@assets';

const StyledFooter = styled.footer`
  width: 100%;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: left;
`;

const BottomContainer = styled.div`
  width: 100%;
  background-color: ${colors.primary};
  padding: 15px 0;
`;

export { StyledFooter, BottomContainer };
