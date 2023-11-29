import React from 'react'

import { RootState } from '@/store/reducers'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { LastUpdatedText, StyledTimeUpdated, TimeUpdatedMarker } from './styled'
import { dateToHHMM } from '@/helpers/dateToHHMM'

interface TimeUpdatedProps {
  type: 'currency' | 'chart'
}

const TimeUpdated: React.FC<TimeUpdatedProps> = ({ type }) => {
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

export default TimeUpdated
