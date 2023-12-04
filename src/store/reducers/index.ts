import { combineReducers } from 'redux'

import { chartDataReducer } from './chartDataReducer'
import { currencyReducer } from './currencyReducer'

export const rootReducer = combineReducers({
  currency: currencyReducer,
  chartData: chartDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>
