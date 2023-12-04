import styled, { css, keyframes } from 'styled-components'

import { NotificationStatuses } from '@/types/notifacation'

import { NotificationVisability } from '.'

const fadeIn = keyframes`
from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }`

const fadeOut = keyframes`
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  `

export const StyledNotification = styled.div<{
  show: NotificationVisability
  type: NotificationStatuses
}>`
  position: fixed;
  right: 1rem;
  top: 1rem;
  width: 350px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  visibility: ${(props) => props.show};
  border: 0.0625rem solid ${(props) => props.theme.colors.text};
  background-color: ${(props) =>
    props.type === 'success' ? '#65C276' : '#E64B4B'};

  ${(props) =>
    props.show &&
    css`
      animation:
        ${fadeIn} 0.5s,
        ${fadeOut} 0.5s 2.5s;
    `}
`

export const NotificationMessage = styled.div`
  text-align: start;
  font-weight: bold;
`
