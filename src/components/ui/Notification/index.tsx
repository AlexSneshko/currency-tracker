import React, {
  Component,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'
import ReactDOM from 'react-dom'

import { StyledNotification } from './styled'

interface NotificationProps {
  type: 'success' | 'error'
  message: string
}

interface NotificationState {
  showSnackbar: boolean
}

interface NotificationMethods {
  show: () => void
}

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

  render() {
    const { type, message } = this.props
    const { showSnackbar } = this.state

    return ReactDOM.createPortal(
      <StyledNotification show={showSnackbar} type={type}>
        <div>{message}</div>
      </StyledNotification>,
      document.getElementById('portal') as HTMLElement
    )
  }
}

const ForwardedNotification = forwardRef(
  (props: NotificationProps, ref: React.ForwardedRef<Notification>) => (
    <Notification {...props} ref={ref} />
  )
) as ForwardRefExoticComponent<NotificationProps & RefAttributes<Notification>>

export default ForwardedNotification
