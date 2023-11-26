import { currencies } from '@/constants/currencies'
import { CurrencyResponse } from '@/types/api'
import { CurrencyCode, CurrencyWithValuesRecords } from '@/types/currency'

import { fetchCurrency } from './fetchCurrency'

export const getCurrencies = async (
  base: CurrencyCode = 'USD'
): Promise<CurrencyWithValuesRecords> => {
  const response = await fetchCurrency(base)

  const result: CurrencyWithValuesRecords = {}

  response.rates.forEach((currencyWithRate: CurrencyResponse) => {
    const currencyCode = currencyWithRate.asset_id_quote as CurrencyCode
    const currency = currencies[currencyCode]

    result[currencyCode] = {
      ...currency,
      value: currencyWithRate.rate,
    }
  })

  return result
}
