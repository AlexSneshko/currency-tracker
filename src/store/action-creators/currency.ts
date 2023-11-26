import { Dispatch } from 'redux'

import { getCurrencies } from '@/api/getCurrencies'

import { CurrecyActionTypes, CurrencyAction } from '../types/currency'

export const fetchCurrencies = (): any => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    try {
      dispatch({ type: CurrecyActionTypes.FETCH_CURRENCIES })
      const response = await getCurrencies()
      dispatch({
        type: CurrecyActionTypes.FETCH_CURRENCIES_SUCCESS,
        payload: response,
      })
    } catch (e) {
      dispatch({
        type: CurrecyActionTypes.FETCH_CURRENCIES_ERROR,
        payload: 'Currency download error',
      })
    }
  }
}
