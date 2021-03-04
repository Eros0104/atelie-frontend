import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: 110px;
`;

export { StyledHeader };
