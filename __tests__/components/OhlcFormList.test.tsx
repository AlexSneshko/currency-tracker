import React from 'react'
import OhlcFormsList from '../../src/components/OhlcFormsList'
import dark from '../../src/styles/themes/dark'

import { render, fireEvent, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

const mockChartData = [
  {
    time_period_start: '2023-11-18T00:00:00.0000000Z',
    time_period_end: '2023-11-19T00:00:00.0000000Z',
    time_open: '2023-11-18T00:00:21.5970000Z',
    time_close: '2023-11-18T11:07:39.8970000Z',
    price_open: 36626,
    price_high: 36631,
    price_low: 36211,
    price_close: 36452,
    volume_traded: 232.74052445,
    trades_count: 2586,
  },
  {
    time_period_start: '2023-11-17T00:00:00.0000000Z',
    time_period_end: '2023-11-18T00:00:00.0000000Z',
    time_open: '2023-11-17T00:00:08.4960000Z',
    time_close: '2023-11-17T23:59:38.5440000Z',
    price_open: 36167,
    price_high: 36800,
    price_low: 35891,
    price_close: 36625,
    volume_traded: 1894.69251869,
    trades_count: 14051,
  },
  {
    time_period_start: '2023-11-16T00:00:00.0000000Z',
    time_period_end: '2023-11-17T00:00:00.0000000Z',
    time_open: '2023-11-16T00:00:03.3800000Z',
    time_close: '2023-11-16T23:59:15.8990000Z',
    price_open: 37886,
    price_high: 37960,
    price_low: 35539,
    price_close: 36165,
    volume_traded: 2075.22455762,
    trades_count: 14685,
  },
  {
    time_period_start: '2023-11-15T00:00:00.0000000Z',
    time_period_end: '2023-11-16T00:00:00.0000000Z',
    time_open: '2023-11-15T00:01:24.0190000Z',
    time_close: '2023-11-15T23:59:57.4640000Z',
    price_open: 35558,
    price_high: 37975,
    price_low: 35378,
    price_close: 37877,
    volume_traded: 2469.98639972,
    trades_count: 16545,
  },
  {
    time_period_start: '2023-11-14T00:00:00.0000000Z',
    time_period_end: '2023-11-15T00:00:00.0000000Z',
    time_open: '2023-11-14T00:00:30.4050000Z',
    time_close: '2023-11-14T23:59:58.5330000Z',
    price_open: 36474,
    price_high: 36749,
    price_low: 35002,
    price_close: 35564,
    volume_traded: 1696.9291046,
    trades_count: 12958,
  },
]

describe('OhlcFormsList', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={dark}>
        <OhlcFormsList
          ohlcChartData={mockChartData}
          onSubmitChanges={() => {}}
        />
      </ThemeProvider>
    )
  })

  it('renders OhlcForm components based on ohlcChartData', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={dark}>
        <OhlcFormsList
          ohlcChartData={mockChartData}
          onSubmitChanges={() => {}}
        />
      </ThemeProvider>
    )
    const ohlcForms = getAllByTestId('ohlc-form')
    expect(ohlcForms).toHaveLength(mockChartData.length)
  })

  it('calls onSubmitChanges when Submit button is clicked', () => {
    const onSubmitChangesMock = jest.fn()
    const { getByText } = render(
      <ThemeProvider theme={dark}>
        <OhlcFormsList
          ohlcChartData={mockChartData}
          onSubmitChanges={onSubmitChangesMock}
        />
      </ThemeProvider>
    )

    fireEvent.click(getByText('Submit'))

    expect(onSubmitChangesMock).toHaveBeenCalled()
  })

  it('updates state when OhlcForm components trigger changes', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={dark}>
        <OhlcFormsList
          ohlcChartData={mockChartData}
          onSubmitChanges={() => {}}
        />
      </ThemeProvider>
    )

    const firstOhlcForm = getAllByTestId('ohlc-form')[0]

    const inputElement = firstOhlcForm.querySelector('input')
    if (inputElement)
      fireEvent.change(inputElement, { target: { value: 'newTime' } })
  })
})
