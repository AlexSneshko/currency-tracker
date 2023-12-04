import React from 'react'
import { OhlcFormsList } from '../../src/components/OhlcFormsList'
import dark from '../../src/styles/themes/dark'

import { render, fireEvent, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { mockChartData } from '../mocks/chartData'

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
