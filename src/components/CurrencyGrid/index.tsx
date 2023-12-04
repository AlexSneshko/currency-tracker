import React from 'react'

import { CurrencyWithValuesRecords } from '@/types/currency'
import { StocksRecords } from '@/types/stocks'

import { CurrencyCard } from '../CurrencyCard'
import {
  CurrencyTitle,
  StyledCurrencyGlidContainer,
  StyledCurrencyGrid,
} from './styled'

interface CurrencyGridProps {
  title: string
  type: 'stocks' | 'quotes'
  currencies: CurrencyWithValuesRecords | StocksRecords
}

export const CurrencyGrid: React.FC<CurrencyGridProps> = ({
  title,
  type,
  currencies,
}) => {
  return (
    <StyledCurrencyGlidContainer data-cy="currency-grid">
      <CurrencyTitle>{title}</CurrencyTitle>
      <StyledCurrencyGrid>
        {Object.values(currencies).map((currencyInfo) => (
          <CurrencyCard
            key={`${currencyInfo.name}-${currencyInfo.value}`}
            type={type}
            currency={currencyInfo}
          />
        ))}
      </StyledCurrencyGrid>
    </StyledCurrencyGlidContainer>
  )
}
