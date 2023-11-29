import { AxiosError } from 'axios'

import { HISTORICAL_OHLCV } from '@/constants/api'

import { coinApiAxiosInstance } from './coinApiAxiosInstance'

export const fetchChartDataFromApi = async () => {
  try {
    const currentRates = await coinApiAxiosInstance.get(
      HISTORICAL_OHLCV('BTC'),
      {
        params: {
          period_id: '1DAY',
          limit: 30,
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
