import styled from 'styled-components';
import { colors } from '@assets';

const StyledA = styled.a`
  color: ${({ primary }) => primary ? colors.primary : colors.defaultFont};  
  text-decoration: underline;
  cursor: pointer;
`;

export { StyledA };
