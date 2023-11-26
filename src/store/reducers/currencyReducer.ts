import {
  CurrecyActionTypes,
  CurrencyAction,
  CurrencyState,
} from '../types/currency'

const initialState: CurrencyState = {
  currencies: {},
  loading: false,
  error: null,
}

export const currencyReducer = (
  state = initialState,
  action: CurrencyAction
): CurrencyState => {
  switch (action.type) {
    case CurrecyActionTypes.FETCH_CURRENCIES:
      return { loading: true, error: null, currencies: {} }
    case CurrecyActionTypes.FETCH_CURRENCIES_SUCCESS:
      return { loading: false, error: null, currencies: action.payload }
    case CurrecyActionTypes.FETCH_CURRENCIES_ERROR:
      return { loading: false, error: action.payload, currencies: {} }
    default:
      return state
  }
}
