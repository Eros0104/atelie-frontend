import styled from "styled-components";

const StyledRow = styled.img`
  width: 100%;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;

export { StyledRow };
