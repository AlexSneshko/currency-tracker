import {
  ChartDataAction,
  ChartDataActionTypes,
  ChartDataState,
} from '../types/chartData'

const initialState: ChartDataState = {
  chartData: [],
  loading: false,
  error: null,
}

export const chartDataReducer = (
  state = initialState,
  action: ChartDataAction
): ChartDataState => {
  switch (action.type) {
    case ChartDataActionTypes.FETCH_CHART_DATA:
      return { ...state, loading: true }
    case ChartDataActionTypes.FETCH_CHART_DATA_SUCCESS:
      return { ...state, loading: false, chartData: action.payload }
    case ChartDataActionTypes.FETCH_CHART_DATA_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
