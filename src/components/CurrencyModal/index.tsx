import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react'

import { roundNumber } from '@/helpers/roundNumber'
import { CurrenciesContext } from '@/pages/HomePage'
import { CurrencyCode, CurrencyWithValue } from '@/types/currency'

import Modal, { ModalProps } from '../ui/Modal'

interface CurrencyModalProps extends Omit<ModalProps, 'children'> {
  currency: CurrencyWithValue
}

const CurrencyModal: React.FC<CurrencyModalProps> = ({
  open,
  onClose,
  currency,
}) => {
  const currencies = useContext(CurrenciesContext)
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
      <span>{currency.name}: </span>
      <input value={userValue} onChange={onInputhange} type="number" />
      <br />
      <br />
      <select onChange={onSelectChange}>
        {Object.keys(currencies).map((key) => (
          <option value={key}>{key}</option>
        ))}
      </select>
      <span>: {result}</span>
    </Modal>
  )
}

export default CurrencyModal
