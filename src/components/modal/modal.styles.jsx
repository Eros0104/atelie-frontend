import styled from 'styled-components';
import { colors } from '@assets';

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
  width: 33%;
  height: auto;
  border-radius: 10px;
  padding: 0.75rem;
  color: rgba(0,0,139, 0.7);
  top: 10%;
  left: 50%;
  transform: translate(-50%,0);
  background-color: ${colors.primary};
`;

export { StyledModal, Backdrop };
