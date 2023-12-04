import React, { Component } from 'react'

import { CurrencyChartResponse } from '@/types/api'

import { OhlcForm } from '../OhlcForm'
import { ChartChangesSubmitButton, StyledOhlcFormsList } from './styled'

interface OhlcFormsListProps {
  ohlcChartData: CurrencyChartResponse[]
  onSubmitChanges: (newData: CurrencyChartResponse[]) => void
}

interface OhlcFormsListState {
  chartDayDataRecords: Record<string, CurrencyChartResponse> | null
}

export class OhlcFormsList extends Component<
  OhlcFormsListProps,
  OhlcFormsListState
> {
  constructor(props: OhlcFormsListProps) {
    super(props)

    this.state = {
      chartDayDataRecords: null,
    }
  }

  componentDidMount = () => {
    const dateInfoData = this.props.ohlcChartData.reduce(
      (allCharts, dailyChart) => {
        return {
          ...allCharts,
          [dailyChart.time_period_start]: dailyChart,
        }
      },
      {}
    )

    this.setState({ chartDayDataRecords: dateInfoData })
  }

  onNewChartFormDataChange = (newDailyData: CurrencyChartResponse) => {
    this.setState({
      chartDayDataRecords: {
        ...this.state.chartDayDataRecords,
        [newDailyData.time_period_start]: newDailyData,
      },
    })
  }

  onSubmit = () => {
    if (this.state.chartDayDataRecords) {
      this.props.onSubmitChanges(Object.values(this.state.chartDayDataRecords))
    }
  }

  render = () => {
    if (!this.state.chartDayDataRecords) return null

    return (
      <StyledOhlcFormsList data-cy="ohlc-forms-list">
        <ChartChangesSubmitButton onClick={this.onSubmit}>
          Submito
        </ChartChangesSubmitButton>
        {Object.values(this.state.chartDayDataRecords).map((ohlcChartDaily) => (
          <OhlcForm
            key={ohlcChartDaily.time_open}
            dailyOhlc={ohlcChartDaily}
            setChanges={this.onNewChartFormDataChange}
          />
        ))}
      </StyledOhlcFormsList>
    )
  }
}
