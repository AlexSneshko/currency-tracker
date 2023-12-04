import React, {
  Component,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'
import ReactDOM from 'react-dom'

import { NotificationStatuses } from '@/types/notifacation'

import { StyledNotification } from './styled'

interface NotificationProps {
  type: NotificationStatuses
  message: string
}

interface NotificationState {
  showSnackbar: boolean
}

interface NotificationMethods {
  show: () => void
}

export type NotificationVisability = 'visible' | 'hidden'

class Notification
  extends Component<NotificationProps, NotificationState>
  implements NotificationMethods
{
  constructor(props: NotificationProps) {
    super(props)
    this.state = {
      showSnackbar: false,
    }
  }

  show = () => {
    this.setState({ showSnackbar: true }, () => {
      setTimeout(() => {
        this.setState({ showSnackbar: false })
      }, 3000)
    })
  }

  getShowStatus = (): NotificationVisability =>
    this.state.showSnackbar ? 'visible' : 'hidden'

  render = () => {
    const { type, message } = this.props

    return ReactDOM.createPortal(
      <StyledNotification
        show={this.getShowStatus()}
        type={type}
        data-cy="notification"
      >
        <div>{message}</div>
      </StyledNotification>,
      document.getElementById('portal') as HTMLElement
    )
  }
}

export const ForwardedNotification = forwardRef(
  (props: NotificationProps, ref: React.ForwardedRef<Notification>) => (
    <Notification {...props} ref={ref} />
  )
) as ForwardRefExoticComponent<NotificationProps & RefAttributes<Notification>>
