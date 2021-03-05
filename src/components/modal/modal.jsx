import React from 'react';
import { StyledModal } from './modal.styles';

const Modal = ({ children, isOpen }) => (
  <StyledModal isOpen={isOpen}>
    {children}
  </StyledModal>
)

export default Modal;
