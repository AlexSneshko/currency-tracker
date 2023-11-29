import React, { Component, ReactNode } from 'react'
import { connect } from 'react-redux'

import BarChart from '@/components/CurrencyChart'
import OhlcFormsList from '@/components/OhlcFormsList'
import ForwardedNotification from '@/components/ui/Notification'
import { fetchChartData } from '@/store/action-creators/chartData'
import { RootState } from '@/store/reducers'
import { ChartDataState } from '@/store/types/chartData'
import { CurrencyChartResponse } from '@/types/api'
import { observer } from '@/utils/observer'

import { TimelinePageLayout } from './styled'
import TimeUpdated from '@/components/TimeUpdated'

const mapStateToProps = (state: RootState): ChartDataState => state.chartData

const mapDispatchToProps = {
  fetchChartData,
}

interface TimelinePageProps extends ChartDataState {
  fetchChartData: any
}

interface TimelinePageState {
  data: CurrencyChartResponse[]
  notification: {
    notificationStatus: 'success' | 'error'
    notificationMessage: string
  }
}

class TimelinePage extends Component<TimelinePageProps, TimelinePageState> {
  notificationRef = React.createRef<any>()
  constructor(props: TimelinePageProps) {
    super(props)
    this.state = {
      data: [],
      notification: {
        notificationMessage: '',
        notificationStatus: 'success',
      },
    }
  }

  componentDidMount(): void {
    this.props.fetchChartData()
    this.setState({ ...this.state, data: this.props.chartData })

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
    for (const dailyData of Object.values(data)) {
      for (const field of Object.values(dailyData)) {
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
    if (!this.props.chartData) {
      return null
    }

    if (this.props.loading) {
      return null
    }

    return (
      <TimelinePageLayout>
        <TimeUpdated type="chart" />
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

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage)
