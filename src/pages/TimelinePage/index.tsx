import { BarChart } from '@/components/CurrencyChart'
import { Component, ReactNode, useEffect, useState } from 'react'
import { fetchChartData } from '@/utils/api/fetchChartData'
import { CurrencyChartResponse } from '@/types/api'
import OhlcFormsList from '@/components/OhlcFormsList'
import { TimelinePageLayout } from './styled'

interface TimelinePageProps {}

interface TimelinePageState {
  data: CurrencyChartResponse[] | null
}

export default class TimelinePage extends Component<
  TimelinePageProps,
  TimelinePageState
> {
  constructor(props: TimelinePageProps) {
    super(props)
    this.state = {
      data: null,
    }
  }

  componentDidMount(): void {
    fetchChartData().then((data: CurrencyChartResponse[]) => {
      console.log(data)
      this.setState({ ...this.state, data: data })
    })
  }

  setNewChartFormDataChanges = (newData: CurrencyChartResponse[]) => {
    this.setState({ data: newData })
  }

  render(): ReactNode {
    if (!this.state.data) {
      return null
    }

    return (
      <TimelinePageLayout>
        <BarChart dataChart={this.state.data} code={'BTC'} />
        <OhlcFormsList
          ohlcChartData={this.state.data}
          onSubmitChanges={this.setNewChartFormDataChanges}
        />
      </TimelinePageLayout>
    )
  }
}
