import { CurrencyWithValuesRecords } from '@/types/currency'

export interface CurrencyState {
  currencies: CurrencyWithValuesRecords
  loading: boolean
  error: null | string
}

export enum CurrecyActionTypes {
  FETCH_CURRENCIES = 'FETCH_CURRENCIES',
  FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS',
  FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR',
}

interface FetchCurrenciesAction {
  type: CurrecyActionTypes.FETCH_CURRENCIES
}

interface FetchCurrenciesSuccessAction {
  type: CurrecyActionTypes.FETCH_CURRENCIES_SUCCESS
  payload: CurrencyWithValuesRecords
}

interface FetchCurrenciesErrorAction {
  type: CurrecyActionTypes.FETCH_CURRENCIES_ERROR
  payload: string
}

export type CurrencyAction =
  | FetchCurrenciesAction
  | FetchCurrenciesSuccessAction
  | FetchCurrenciesErrorAction
