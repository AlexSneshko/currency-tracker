import React, { Component } from 'react'

import { CurrencyChartResponse } from '@/types/api'

import { StyledOhlcForm } from './styled'

interface OhlcFormProps {
  dailyOhlc: CurrencyChartResponse
  setChanges: (newDailyOhlc: CurrencyChartResponse) => void
}

export class OhlcForm extends Component<OhlcFormProps> {
  constructor(props: OhlcFormProps) {
    super(props)
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.setChanges({
      ...this.props.dailyOhlc,
      [event.target.name]: +event.target.value,
    })
  }

  toDDMMformat = (date: string) => {
    const dateFormat = new Date(date)
    const day = dateFormat.getUTCDate()
    const month = dateFormat.getUTCMonth() + 1
    return `${month < 10 ? `0${month}` : month}.${day < 10 ? `0${day}` : day}`
  }

  render = () => {
    return (
      <StyledOhlcForm data-testid="ohlc-form">
        <span>{this.toDDMMformat(this.props.dailyOhlc.time_period_start)}</span>
        {Object.entries(this.props.dailyOhlc)
          .filter(([price_name, _]) => price_name.startsWith('price_'))
          .map(([price_name, price_value]) => (
            <div
              key={`${this.props.dailyOhlc.time_period_start}-${price_name}`}
            >
              <span>{price_name}: </span>
              <input
                type="number"
                name={price_name}
                value={price_value}
                onChange={(e) => this.onInputChange(e)}
                data-cy={`input-${price_name}`}
              />
            </div>
          ))}
      </StyledOhlcForm>
    )
  }
}
