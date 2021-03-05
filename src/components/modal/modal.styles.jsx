import styled from 'styled-components';
import { colors, CloseIcon } from '@assets';

const Backdrop = styled.div`
	z-index: 10;
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.5);
`;

const StyledModal = styled.div`
  position:fixed;
  background: antiquewhite;
  width: 100%;
  margin: 5px;
  max-width:710px;
  height: auto;
  border-radius: 3px;
  padding: 20px 30px 30px;
  color: rgba(0,0,139, 0.7);
  top: 10%;
  left: 50%;
  transform: translate(-50%,0);
  background-color: ${colors.primary};
  box-sizing: border-box;
`;

const Header = styled.div`
  text-align: right;
`;

const Icon = styled(CloseIcon)`
  color: ${colors.white};
  cursor: pointer;
  height: 40px;
`;

export { StyledModal, Backdrop, Header, Icon };
