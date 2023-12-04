import React, { useContext, useState } from 'react'

import { Modal, ModalProps } from '@/components/ui/Modal'
import { roundNumber } from '@/helpers/roundNumber'
import { CurrenciesContext } from '@/pages/HomePage'
import { CurrencyCode, CurrencyWithValue } from '@/types/currency'
import { useSelector } from 'react-redux'
import { store } from '@/store'
import { RootState } from '@/store/reducers'
import { StyledModalText } from './styled'

interface CurrencyModalProps extends Omit<ModalProps, 'children'> {
  currency: CurrencyWithValue
}

export const CurrencyModal: React.FC<CurrencyModalProps> = ({
  open,
  onClose,
  currency,
}) => {
  const currencies = useSelector(
    (store: RootState) => store.currency
  ).currencies
  const [userValue, setUserValue] = useState<number>(1)
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState<number>(1)

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const currentCurrencyValue =
      currencies[event.target.value as CurrencyCode]!.value
    setSelectedCurrencyValue(currentCurrencyValue)
  }

  const onInputhange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(Number(event.target.value))
  }

  const result = roundNumber(
    (userValue * currency.value) / selectedCurrencyValue
  )

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalText>{currency.name}: </StyledModalText>
      <input
        value={userValue}
        onChange={onInputhange}
        type="number"
        data-testid="amount-input"
        data-cy="amount-input"
      />
      <br />
      <br />
      <select onChange={onSelectChange} data-cy="currency-select">
        {Object.keys(currencies).map((key) => (
          <option
            key={`modal-${key}`}
            value={key}
            data-cy="select-currency-option"
          >
            {key}
          </option>
        ))}
      </select>
      <StyledModalText data-cy="modal-convert-value">
        : {result}
      </StyledModalText>
    </Modal>
  )
}
