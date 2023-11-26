import { Dispatch } from 'redux'

import { fetchChartDataFromApi } from '@/api/fetchChartDataFromApi'

import { ChartDataAction, ChartDataActionTypes } from '../types/chartData'

export const fetchChartData = (): any => {
  return async (dispatch: Dispatch<ChartDataAction>) => {
    try {
      dispatch({ type: ChartDataActionTypes.FETCH_CHART_DATA })
      const response = await fetchChartDataFromApi()
      dispatch({
        type: ChartDataActionTypes.FETCH_CHART_DATA_SUCCESS,
        payload: response,
      })
    } catch {
      await dispatch({
        type: ChartDataActionTypes.FETCH_CHART_DATA_ERROR,
        payload: 'Chart data download error',
      })
    }
  }
}
