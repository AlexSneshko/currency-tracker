import React from 'react'

import {
  CurrencyCode,
  CurrencyWithValue,
  CurrencyWithValuesRecords,
} from '@/types/currency'
import { StocksRecords } from '@/types/stocks'

import CurrencyCard from '../CurrencyCard'
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

const CurrencyGrid: React.FC<CurrencyGridProps> = ({
  title,
  type,
  currencies,
}) => {
  return (
    <StyledCurrencyGlidContainer>
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

export default CurrencyGrid
