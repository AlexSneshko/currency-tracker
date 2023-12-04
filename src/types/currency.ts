export type CurrencyCode =
  | 'AUD'
  | 'ARS'
  | 'USD'
  | 'CAD'
  | 'JPY'
  | 'CNY'
  | 'EUR'
  | 'BTC'
  | 'GBR'

export interface CurrencyInfo {
  name: string
  icon: string
}

export interface CurrencyWithValue extends CurrencyInfo {
  value: number
}

export type CurrencyRecords = Record<CurrencyCode, CurrencyInfo>
export type CurrencyWithValuesRecords = Partial<
  Record<CurrencyCode, CurrencyWithValue>
>
