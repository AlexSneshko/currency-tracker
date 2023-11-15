import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { CloseModalButton, ModalOverlay, StyledModal } from './styled'

export interface ModalProps {
  children: ReactNode
  open: boolean
  onClose: React.MouseEventHandler<HTMLElement>
}

const portalRoot = document.getElementById('portal') as HTMLElement

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <StyledModal>
        <CloseModalButton onClick={onClose}>X</CloseModalButton>
        {children}
      </StyledModal>
    </>,
    portalRoot
  )
}

export default Modal
