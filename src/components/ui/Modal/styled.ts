import styled from 'styled-components'

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  background: #202025;
  padding: 3rem;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CloseModalButton = styled.button`
  position: fixed;
  cursor: pointer;
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  top: 1rem;
  right: 1rem;
`
