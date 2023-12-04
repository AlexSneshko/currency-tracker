import styled from 'styled-components'

export const StyledOhlcFormsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 0;
`

export const ChartChangesSubmitButton = styled.button`
  padding: 1rem 2rem;
  border: 0.0625rem solid ${(props) => props.theme.colors.text};
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};

  &:hover {
    cursor: pointer;
    background-color: #9e9e9e;
  }
`
