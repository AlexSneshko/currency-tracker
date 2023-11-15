import React, { useState } from 'react'
import {
  CurrencyInfoBlock,
  CurrencyName,
  CurrencyValue,
  StyledCurrencyCard,
} from './styled'
import { roundNumber } from '@/utils/helpers/roundNumber'
import { CurrencyCode, CurrencyWithValue } from '@/types/currency'
import CurrencyModal from '../CurrencyModal'

interface CurrencyCardProps {
  type: 'stocks' | 'quotes'
  currency: CurrencyWithValue
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ type, currency }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const roundedValue = roundNumber(currency.value)

  return (
    <>
      <StyledCurrencyCard onClick={() => setIsModalOpen(true)}>
        <img src={currency.icon} />
        <CurrencyInfoBlock>
          <CurrencyName>{currency.name}</CurrencyName>
          <CurrencyValue>
            {type === 'stocks' ? `${roundedValue}%` : `R$ ${roundedValue}`}
          </CurrencyValue>
        </CurrencyInfoBlock>
      </StyledCurrencyCard>
      <CurrencyModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currency={currency}
      />
    </>
  )
}

export default CurrencyCard
