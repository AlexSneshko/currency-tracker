import { render } from '@testing-library/react'
import CurrencyCard from '../../src/components/CurrencyCard'
import { CurrencyWithValue } from '../../src/types/currency'
import { currencies } from '../../src/constants/currencies'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import usdtIcon from '../../src/assets/dollar-icon.svg'

const currency: CurrencyWithValue = {
  name: 'Commertial Dollar',
  icon: usdtIcon,
  value: 5.23,
}

describe('Currency Card', () => {
  test('renders quotes CurrencyCard component', () => {
    const { getByText } = render(
      <CurrencyCard type="quotes" currency={currency} />
    )

    expect(getByText(currency.name)).toBeInTheDocument()

    expect(getByText(`R$ ${currency.value}`)).toBeInTheDocument()
  })

  test('renders stocks CurrencyCard component', () => {
    const { getByText, getByAltText } = render(
      <CurrencyCard type="stocks" currency={currency} />
    )

    expect(getByText(currencies['USD'].name)).toBeInTheDocument()
    expect(getByText('5.23%')).toBeInTheDocument()
  })
})
