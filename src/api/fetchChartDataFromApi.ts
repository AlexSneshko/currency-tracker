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
    console.log(error)
  }
}
