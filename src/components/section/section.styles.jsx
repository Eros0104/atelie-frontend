import styled from "styled-components";

const StyledSection = styled.div`
  width: 100%;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 40px 0;
`;

export { StyledSection };
