import React from 'react'
import {
  CurrencyTitle,
  StyledCurrencyGlidContainer,
  StyledCurrencyGrid,
} from './styled'

import CurrencyCard from '../CurrencyCard'
import {
  CurrencyCode,
  CurrencyWithValue,
  CurrencyWithValuesRecords,
} from '@/types/currency'
import { StocksRecords } from '@/types/stocks'

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
          <CurrencyCard type={type} currency={currencyInfo} />
        ))}
      </StyledCurrencyGrid>
    </StyledCurrencyGlidContainer>
  )
}

export default CurrencyGrid
