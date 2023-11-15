import { CurrencyCode, CurrencyWithValuesRecords } from '@/types/currency'
import { fetchCurrency } from './fetchCurrency'
import { CurrencyResponse } from '@/types/api'
import { currencies } from '@/constants/currencies'

export const getCurrencies = async (
  base: CurrencyCode = 'USDT'
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
