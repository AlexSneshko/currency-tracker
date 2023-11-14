import CurrencyGrid from '@/components/CurrencyGrid'
import { stocks } from '@/constants/stocks'
import { getCurrencies } from '@/utils/api/getCurrencies'
import { useEffect, useState } from 'react'
import { HomePageLayout } from './styled'
import { CurrencyWithValuesRecords } from '@/types/currency'

const HomePage = () => {
  const [currencies, setCurrencies] = useState<CurrencyWithValuesRecords>({})

  useEffect(() => {
    getCurrencies().then((data: CurrencyWithValuesRecords) => {
      setCurrencies(data)
    })
  }, [])

  return (
    <HomePageLayout>
      <CurrencyGrid title="Stocks" type="stocks" currencies={stocks} />
      <CurrencyGrid title="Quotes" type="quotes" currencies={currencies} />
    </HomePageLayout>
  )
}

export default HomePage
