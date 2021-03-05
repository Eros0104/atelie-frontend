import React from 'react';
import { StyledModal, Backdrop } from './modal.styles';

const Modal = ({ children, isOpen }) => (
  <Backdrop  isOpen={isOpen}>
    <StyledModal>
      {children}
    </StyledModal>
  </Backdrop>
)

export default Modal;
