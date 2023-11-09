import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'

import usePeristedState from '@/utils/usePersistedState'

import GlobalStyle from '@/styles/global'
import dark from '@/styles/themes/dark'
import light from '@/styles/themes/light'
import Header from '@/components/Header/Header'

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', dark)
  //<Switcher isOn={theme.title === 'light'} handleToggle={toggleTheme} />

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header isOn={theme.title === 'light'} handleToggle={toggleTheme} />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
