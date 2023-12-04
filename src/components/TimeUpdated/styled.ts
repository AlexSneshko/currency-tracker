import styled from 'styled-components'

export const StyledTimeUpdated = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 65px;
  padding-bottom: 30px;
`

export const TimeUpdatedMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 25px 0 0;
  width: 34px;
  height: 34px;
  background-color: #24794099;
  border-radius: 50%;
  div {
    width: 16px;
    height: 16px;
    background-color: green;
    border-radius: 50%;
  }
`

export const LastUpdatedText = styled.div`
  color: #d9d9d9;
  font-size: 2rem;
  font-weight: 300;
`
