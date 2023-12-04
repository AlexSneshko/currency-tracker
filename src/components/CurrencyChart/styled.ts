import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'

import { container } from '@/styles/global'

export const Container = styled.div`
  ${container}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
`

export const StyledBar = styled(Bar)`
  margin: 0;
`
