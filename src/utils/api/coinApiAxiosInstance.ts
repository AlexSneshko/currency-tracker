import axios from 'axios'

import { BASE_URL, API_KEY } from '@/constants/api'

export const coinApiAxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'text/json',
    'X-CoinAPI-Key': API_KEY,
  },
})
