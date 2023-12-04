import { AxiosError } from 'axios'

import { ALL_CURRENT_RATES_URL } from '@/constants/api'
import { currencies } from '@/constants/currencies'
import { CurrencyCode } from '@/types/currency'

import { coinApiAxiosInstance } from './coinApiAxiosInstance'

export const fetchCurrency = async (baseCurrency: CurrencyCode = 'USD') => {
  try {
    const currencyCodes = Object.keys(currencies).join(',')

    const currentRates = await coinApiAxiosInstance.get(
      `${ALL_CURRENT_RATES_URL}/${baseCurrency}`,
      {
        params: {
          filter_asset_id: currencyCodes,
          invert: true,
        },
      }
    )

    return currentRates.data
  } catch (error) {
    console.log(error)
  }
}
