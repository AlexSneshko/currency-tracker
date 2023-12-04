import { CurrencyWithValue } from './currency'

export type StocksCode = 'BVSP' | 'IFIX'

export type StocksRecords = Record<StocksCode, CurrencyWithValue>
