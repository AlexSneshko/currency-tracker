import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { primaryTextColor } from '@/styles/global'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 78rem;
  padding: 2rem 6rem;
  margin: 0 auto;

  @media (max-width: 48rem) {
    padding: 0.6rem 1.75rem;

    img {
      width: 0.75rem;
    }
  }
`

export const StyledNav = styled.nav`
  flex: 1;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    max-width: 40rem;
    margin: 0 auto;
  }
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.25rem;
  color: inherit;

  &:not(.active):hover {
    color: #69736b;
  }

  &.active {
    ${primaryTextColor}
  }

  @media (max-width: 48rem) {
    font-size: 0.625rem;
  }
`
