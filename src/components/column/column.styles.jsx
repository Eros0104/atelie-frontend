import styled from "styled-components";

const StyledColumn = styled.div`
  flex: ${({ flex }) => flex || 1};
  ${({ alignCenter }) => alignCenter && "align-self: center;"} 
  
`;

export { StyledColumn };
