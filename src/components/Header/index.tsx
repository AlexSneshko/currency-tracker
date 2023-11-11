import logo from '@/assets/currency-tracker-icon.svg'
import Switcher from '@/components/ui/Switcher'
import { useTheme } from 'styled-components'
import { HeaderContainer, StyledNav, StyledNavLink } from './styled'

interface HeaderProps {
  onSwitchTheme: React.ChangeEventHandler<HTMLInputElement>
}

const Header: React.FC<HeaderProps> = ({ onSwitchTheme }) => {
  const theme = useTheme()

  return (
    <header>
      <HeaderContainer>
        <img src={logo} />
        <StyledNav>
          <ul>
            <li>
              <StyledNavLink to={'/'}>Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={'/timeline'}>Timeline</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={'/bankcard'}>Bank Card</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={'/contact'}>Contact</StyledNavLink>
            </li>
          </ul>
        </StyledNav>
        <Switcher isOn={theme.title === 'light'} handleToggle={onSwitchTheme} />
      </HeaderContainer>
    </header>
  )
}

export default Header
