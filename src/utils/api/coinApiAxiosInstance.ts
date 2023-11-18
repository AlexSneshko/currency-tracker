import axios from 'axios'
import axiosCacheAdapter from 'axios-cache-adapter'

import { BASE_URL, API_KEY } from '@/constants/api'

export const coinApiAxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'text/json',
    'X-CoinAPI-Key': API_KEY,
  },
  //   adapter: axiosCacheAdapter.setupCache({
  //     maxAge: 30 * 60 * 1000,
  //   }).adapter,
})
