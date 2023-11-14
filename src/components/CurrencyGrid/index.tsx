import React from 'react'
import {
  CurrencyTitle,
  StyledCurrencyGlidContainer,
  StyledCurrencyGrid,
} from './styled'

import CurrencyCard from '../CurrencyCard'
import { CurrencyWithValuesRecords } from '@/types/currency'
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
        {Object.values(currencies).map((currency) => (
          <CurrencyCard type={type} currency={currency} />
        ))}
      </StyledCurrencyGrid>
    </StyledCurrencyGlidContainer>
  )
}

export default CurrencyGrid
