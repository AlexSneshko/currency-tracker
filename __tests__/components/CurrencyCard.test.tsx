import { render } from '@testing-library/react'
import { CurrencyCard } from '../../src/components/CurrencyCard'
import { currencies } from '../../src/constants/currencies'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { mockCurrency } from '../mocks/currency'

describe('Currency Card', () => {
  test('renders quotes CurrencyCard component', () => {
    const { getByText } = render(
      <CurrencyCard type="quotes" currency={mockCurrency} />
    )

    expect(getByText(mockCurrency.name)).toBeInTheDocument()

    expect(getByText(`R$ ${mockCurrency.value}`)).toBeInTheDocument()
  })

  test('renders stocks CurrencyCard component', () => {
    const { getByText } = render(
      <CurrencyCard type="stocks" currency={mockCurrency} />
    )

    expect(getByText(currencies['USD'].name)).toBeInTheDocument()
    expect(getByText('5.23%')).toBeInTheDocument()
  })
})
