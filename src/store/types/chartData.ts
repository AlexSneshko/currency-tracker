import { CurrencyChartResponse } from '@/types/api'

export interface ChartDataState {
  chartData: CurrencyChartResponse[]
  loading: boolean
  error: null | string
}

export enum ChartDataActionTypes {
  FETCH_CHART_DATA = 'FETCH_CHART_DATA',
  FETCH_CHART_DATA_SUCCESS = 'FETCH_CHART_DATA_SUCCESS',
  FETCH_CHART_DATA_ERROR = 'FETCH_CHART_DATA_ERROR',
}

interface FetchChartDataAction {
  type: ChartDataActionTypes.FETCH_CHART_DATA
}

interface FetchChartDataActionSuccess {
  type: ChartDataActionTypes.FETCH_CHART_DATA_SUCCESS
  payload: CurrencyChartResponse[]
}

interface FetchChartDataActionError {
  type: ChartDataActionTypes.FETCH_CHART_DATA_ERROR
  payload: string
}

export type ChartDataAction =
  | FetchChartDataAction
  | FetchChartDataActionSuccess
  | FetchChartDataActionError
