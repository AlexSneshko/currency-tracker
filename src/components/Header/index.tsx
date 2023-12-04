import React from 'react'
import { useTheme } from 'styled-components'

import logo from '@/assets/currency-tracker-icon.svg'
import { Switcher } from '@/components/ui/Switcher'
import { navLinks } from '@/constants/navLInks'
import { router } from '@/routes/Routes'

import { HeaderContainer, StyledNav, StyledNavLink } from './styled'

interface HeaderProps {
  onSwitchTheme: React.ChangeEventHandler<HTMLInputElement>
}

export const Header: React.FC<HeaderProps> = ({ onSwitchTheme }) => {
  const theme = useTheme()

  return (
    <header>
      <HeaderContainer>
        <img src={logo} />
        <StyledNav>
          <ul>
            {navLinks.map((link) => (
              <StyledNavLink key={link.to} to={link.to}>
                {link.label}
              </StyledNavLink>
            ))}
          </ul>
        </StyledNav>
        <Switcher isOn={theme.title === 'light'} handleToggle={onSwitchTheme} />
      </HeaderContainer>
    </header>
  )
}
