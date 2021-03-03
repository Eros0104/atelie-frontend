import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  overflow: auto;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

export { StyledContainer };
