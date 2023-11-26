import styled from 'styled-components'

import { container, whiteColor } from '@/styles/global'

export const StyledCurrencyGlidContainer = styled.div`
  ${container}
  width: 100%;
  text-align: left;
`

export const StyledCurrencyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3.5rem;
  column-gap: 11.5rem;
  justify-content: center;
`

export const CurrencyTitle = styled.h1`
  max-width: 32.5rem;
  color: ${whiteColor};
  font-size: 2rem;
  font-style: normal;
  font-weight: 300;
  border-bottom: 0.12875rem solid #474747;
  margin-left: 0;

  margin-bottom: 3.15rem;
  padding-bottom: 1.55rem;
`
