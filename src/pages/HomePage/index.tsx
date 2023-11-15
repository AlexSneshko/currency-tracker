import CurrencyGrid from '@/components/CurrencyGrid'
import { stocks } from '@/constants/stocks'
import { getCurrencies } from '@/utils/api/getCurrencies'
import { createContext, useEffect, useState } from 'react'
import { HomePageLayout } from './styled'
import { CurrencyWithValuesRecords } from '@/types/currency'

export const CurrenciesContext = createContext<CurrencyWithValuesRecords>({})

const HomePage = () => {
  const [currencies, setCurrencies] = useState<CurrencyWithValuesRecords>({})

  useEffect(() => {
    getCurrencies().then((data: CurrencyWithValuesRecords) => {
      setCurrencies(data)
    })
  })

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
