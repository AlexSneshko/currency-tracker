import { CurrencyChartResponse } from '@/types/api'
import React, { Component } from 'react'
import OhlcForm from '../OhlcForm'
import { ChartChangesSubmitButton, StyledOhlcFormsList } from './styled'

interface OhlcFormsListProps {
  ohlcChartData: CurrencyChartResponse[]
  onSubmitChanges: (newData: CurrencyChartResponse[]) => void
}

interface OhlcFormsListState {
  chartDayDataRecords: Record<string, CurrencyChartResponse> | null
}

class OhlcFormsList extends Component<OhlcFormsListProps, OhlcFormsListState> {
  constructor(props: OhlcFormsListProps) {
    super(props)

    this.state = {
      chartDayDataRecords: null,
    }
  }

  componentDidMount(): void {
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

  onNewChartFormDataChange = (newData: CurrencyChartResponse) => {
    this.setState({
      chartDayDataRecords: {
        ...this.state.chartDayDataRecords,
        [newData.time_period_start]: newData,
      },
    })
  }

  onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (this.state.chartDayDataRecords) {
      this.props.onSubmitChanges(Object.values(this.state.chartDayDataRecords))
    }
  }

  render(): React.ReactNode {
    if (!this.state.chartDayDataRecords) return null

    return (
      <StyledOhlcFormsList>
        <ChartChangesSubmitButton onClick={this.onSubmit}>
          Submit
        </ChartChangesSubmitButton>
        {Object.values(this.state.chartDayDataRecords).map((ohlcChartDaily) => (
          <OhlcForm
            dailyOhlc={ohlcChartDaily}
            setChanges={this.onNewChartFormDataChange}
          />
        ))}
      </StyledOhlcFormsList>
    )
  }
}

export default OhlcFormsList
