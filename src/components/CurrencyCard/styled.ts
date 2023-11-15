import styled from 'styled-components'

export const StyledCurrencyCard = styled.div`
  max-width: 32.5rem;
  width: 100%;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #474747;
  background: #202025;
  display: flex;
  gap: 2rem;
  cursor: pointer;

  p {
    margin: 0;
  }

  img {
    margin: 0;
    width: 5rem;
  }
`

export const CurrencyInfoBlock = styled.div`
  margin: 0;
  width: fit-content;
`

export const CurrencyName = styled.p`
  color: #d9d9d9;
  font-size: 2.2rem;
  font-weight: 400;
  text-align: left;
`

export const CurrencyValue = styled.p`
  color: #a7b2c3;
  font-size: 2rem;
  font-weight: 300;
  text-align: left;
`
