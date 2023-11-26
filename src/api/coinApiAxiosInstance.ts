import axios from 'axios'
import axiosCacheAdapter from 'axios-cache-adapter'

import { API_KEY, BASE_URL } from '@/constants/api'

export const coinApiAxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'text/json',
    'X-CoinAPI-Key': API_KEY,
    'Cache-Control': 'max-age=18000',
  },
  //   adapter: axiosCacheAdapter.setupCache({
  //     maxAge: 30 * 60 * 1000,
  //   }).adapter,
})
