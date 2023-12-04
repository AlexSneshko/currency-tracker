import React from 'react'

import { dateToHHMM } from '@/helpers/dateToHHMM'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { RootState } from '@/store/reducers'

import { LastUpdatedText, StyledTimeUpdated, TimeUpdatedMarker } from './styled'

interface TimeUpdatedProps {
  type: 'currency' | 'chart'
}

export const TimeUpdated: React.FC<TimeUpdatedProps> = ({ type }) => {
  const state = useTypedSelector((state: RootState) =>
    type === 'currency' ? state.currency : state.chartData
  )

  if (!state.lastUpdated) return null

  return (
    <StyledTimeUpdated>
      <TimeUpdatedMarker>
        <div />
      </TimeUpdatedMarker>
      <LastUpdatedText>
        Last updated at {dateToHHMM(state.lastUpdated)}
      </LastUpdatedText>
    </StyledTimeUpdated>
  )
}
