import styled from 'styled-components';
import { colors, fontSize } from '@assets';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  font-size: ${fontSize.button};
  color: ${colors.white};
`;

export { StyledButton };
