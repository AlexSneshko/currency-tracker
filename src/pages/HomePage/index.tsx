import React, { createContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { CurrencyGrid } from '@/components/CurrencyGrid'
import { TimeUpdated } from '@/components/TimeUpdated'
import { Loader } from '@/components/ui/Loader'
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

  if (loading) return <Loader />

  return (
    <HomePageLayout>
      <TimeUpdated type="currency" />
      <CurrencyGrid title="Stocks" type="stocks" currencies={stocks} />
      <CurrencyGrid title="Quotes" type="quotes" currencies={currencies} />
    </HomePageLayout>
  )
}

export default HomePage
