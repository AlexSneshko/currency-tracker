import React, { createContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CurrencyGrid from '@/components/CurrencyGrid'
import { stocks } from '@/constants/stocks'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { fetchCurrencies } from '@/store/action-creators/currency'
import { CurrencyWithValuesRecords } from '@/types/currency'

import { HomePageLayout } from './styled'

export const CurrenciesContext = createContext<CurrencyWithValuesRecords>({})

const HomePage = () => {
  const { currencies, error, loading } = useTypedSelector(
    (state) => state.currency
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrencies())
  }, [])

  return (
    <HomePageLayout>
      <CurrenciesContext.Provider value={currencies}>
        <CurrencyGrid title="Stocks" type="stocks" currencies={stocks} />
        <CurrencyGrid title="Quotes" type="quotes" currencies={currencies} />
      </CurrenciesContext.Provider>
    </HomePageLayout>
  )
}

export default HomePage
