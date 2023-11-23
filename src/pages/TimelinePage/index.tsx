import { BarChart } from '@/components/CurrencyChart'
import React, { Component, ReactNode } from 'react'
import { fetchChartData } from '@/utils/api/fetchChartData'
import { CurrencyChartResponse } from '@/types/api'
import OhlcFormsList from '@/components/OhlcFormsList'
import { TimelinePageLayout } from './styled'
import { dataCurrencies } from '@/utils/api/data'
import ForwardedNotification from '@/components/ui/Notification'
import { observer } from '@/utils/observer'

interface TimelinePageProps {}

interface TimelinePageState {
  data: CurrencyChartResponse[] | null
  notification: {
    notificationStatus: 'success' | 'error'
    notificationMessage: string
  }
}

export default class TimelinePage extends Component<
  TimelinePageProps,
  TimelinePageState
> {
  notificationRef = React.createRef<any>()
  constructor(props: TimelinePageProps) {
    super(props)
    this.state = {
      data: null,
      notification: {
        notificationMessage: '',
        notificationStatus: 'success',
      },
    }
  }

  componentDidMount(): void {
    // fetchChartData().then((data: CurrencyChartResponse[]) => {
    //   console.log(data)
    //   this.setState({ ...this.state, data: data })
    // })
    this.setState({ ...this.state, data: dataCurrencies })
    observer.attach(this.handleShowSnackbar)
  }

  componentWillUnmount(): void {
    observer.detach(this.handleShowSnackbar)
  }

  handleShowSnackbar = () => {
    if (this.notificationRef.current) {
      this.notificationRef.current.show()
    }
  }

  ifFormDataFulfilled = (data: CurrencyChartResponse[]) => {
    for (let dailyData of Object.values(data)) {
      for (let field of Object.values(dailyData)) {
        console.log(field)
        if (field <= 0) {
          return false
        }
      }
    }
    return true
  }

  setNewChartFormDataChanges = (newData: CurrencyChartResponse[]) => {
    console.log(newData)
    if (this.ifFormDataFulfilled(newData)) {
      this.setState({
        ...this.state,
        notification: {
          notificationStatus: 'success',
          notificationMessage: `Data is valid`,
        },
      })
    } else {
      this.setState({
        ...this.state,
        data: newData,
        notification: {
          notificationStatus: 'error',
          notificationMessage: 'Invalid chart data',
        },
      })
    }

    observer.notify()
  }

  render(): ReactNode {
    if (!this.state.data) {
      return null
    }

    return (
      <TimelinePageLayout>
        <ForwardedNotification
          type={this.state.notification.notificationStatus}
          message={this.state.notification.notificationMessage}
          ref={this.notificationRef}
        />
        <BarChart dataChart={this.state.data} code={'BTC'} />
        <OhlcFormsList
          ohlcChartData={this.state.data}
          onSubmitChanges={this.setNewChartFormDataChanges}
        />
      </TimelinePageLayout>
    )
  }
}
