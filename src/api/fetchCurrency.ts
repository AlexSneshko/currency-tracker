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
    if (error instanceof AxiosError) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    }
    return null
  }
}
