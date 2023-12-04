import React, { useState } from 'react'

import { roundNumber } from '@/helpers/roundNumber'
import { CurrencyWithValue } from '@/types/currency'

import { CurrencyModal } from '../CurrencyModal'
import {
  CurrencyInfoBlock,
  CurrencyName,
  CurrencyValue,
  StyledCurrencyCard,
} from './styled'

interface CurrencyCardProps {
  type: 'stocks' | 'quotes'
  currency: CurrencyWithValue
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  type,
  currency,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const roundedValue = roundNumber(currency.value)

  const onChangeIsModalOpen = (status: boolean) => () => setIsModalOpen(status)

  return (
    <>
      <StyledCurrencyCard
        onClick={onChangeIsModalOpen(true)}
        data-cy="currency-card"
      >
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
        onClose={onChangeIsModalOpen(false)}
        currency={currency}
      />
    </>
  )
}
