import React from 'react'
import {
  CurrencyInfoBlock,
  CurrencyName,
  CurrencyValue,
  StyledCurrencyCard,
} from './styled'
import { roundNumber } from '@/utils/helpers/roundNumber'
import { CurrencyWithValue } from '@/types/currency'

interface CurrencyCardProps {
  type: 'stocks' | 'quotes'
  currency: CurrencyWithValue
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ type, currency }) => {
  const roundedValue = roundNumber(currency.value)
  return (
    <StyledCurrencyCard>
      <img src={currency.icon} />
      <CurrencyInfoBlock>
        <CurrencyName>{currency.name}</CurrencyName>
        <CurrencyValue>
          {type === 'stocks' ? `${roundedValue}%` : `R$ ${roundedValue}`}
        </CurrencyValue>
      </CurrencyInfoBlock>
    </StyledCurrencyCard>
  )
}

export default CurrencyCard
