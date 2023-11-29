import styled from 'styled-components'

export const SwitchButton = styled.span`
  position: absolute;
  top: -0.125rem;
  left: -0.125rem;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 2.8rem;
  transition: 0.3s;

  background: ${(props) => props.theme.colors.background};
  border: 0.125rem solid ${(props) => props.theme.colors.text};

  @media (max-width: 48rem) {
    width: 1rem;
    height: 1rem;
    transition: 0.5s;
    border-width: 0.0625rem;
    top: -0.0625rem;
  }
`

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 3.2rem;
  height: 1.6rem;
  border-radius: 6.25rem;
  position: relative;
  transition: background-color 0.3s;
  background: ${(props) => props.theme.colors.background};
  border: 0.125rem solid ${(props) => props.theme.colors.text};

  &:active ${SwitchButton} {
    width: 2.2rem;
  }

  @media (max-width: 48rem) {
    width: 1.8rem;
    height: 1rem;
    border-width: 0.0625rem;
  }
`

export const SwitchCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${SwitchLabel} ${SwitchButton} {
    left: calc(100% + 2px);
    transform: translateX(-100%);
  }
`
