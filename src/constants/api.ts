export const API_KEY = process.env.API_KEY
export const BASE_URL = 'https://rest.coinapi.io'
export const ALL_CURRENT_RATES_URL = '/v1/exchangerate'
export const HISTORICAL_OHLCV = (cryptoCurrencyCode: string) =>
  `/v1/ohlcv/BITSTAMP_SPOT_${cryptoCurrencyCode}_USD/history`
