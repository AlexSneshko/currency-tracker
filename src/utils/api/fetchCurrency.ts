import { AxiosError } from 'axios'

import { GET_ALL_CURRENT_RATES_URL } from '@/constants/api'
import { currencies } from '@/constants/currencies'
import { coinApiAxiosInstance } from './coinApiAxiosInstance'
import { CurrencyCode } from '@/types/currency'

export const fetchCurrency = async (baseCurrency: CurrencyCode = 'USDT') => {
  try {
    const currencyCodes = Object.keys(currencies).join(',')

    console.log(coinApiAxiosInstance)

    const currentRates = await coinApiAxiosInstance.get(
      `${GET_ALL_CURRENT_RATES_URL}/${baseCurrency}`,
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
