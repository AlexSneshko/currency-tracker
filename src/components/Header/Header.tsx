import styles from './Header.module.scss'
import logo from '@/assets/currency-tracker-icon.svg'
import { NavLink } from 'react-router-dom'
import Switcher, { SwitcherProps } from '../ui/Switcher/Switcher'
import { useTheme } from 'styled-components'

interface HeaderProps {
  onSwitchTheme: React.ChangeEventHandler<HTMLInputElement>
}

const Header: React.FC<HeaderProps> = ({ onSwitchTheme }) => {
  const theme = useTheme()

  const isLinkActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : ''

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={logo} className={styles.logo} />
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to={'/'} className={isLinkActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/timeline'} className={isLinkActive}>
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink to={'/bankcard'} className={isLinkActive}>
                Bank Card
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contact'} className={isLinkActive}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switcher isOn={theme.title === 'light'} handleToggle={onSwitchTheme} />
      </div>
    </header>
  )
}

export default Header
