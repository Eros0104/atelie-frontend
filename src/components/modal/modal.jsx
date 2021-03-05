import React from 'react';
import { StyledModal, Backdrop, Header, Icon } from './modal.styles';

const Modal = ({ children, isOpen, onClose }) => (
  <Backdrop isOpen={isOpen}>
    <StyledModal>
      <Header>
        <Icon onClick={onClose} />
      </Header>
      {children}
    </StyledModal>
  </Backdrop>
)

export default Modal;
