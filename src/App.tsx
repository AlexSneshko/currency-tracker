import { DefaultTheme, ThemeProvider } from 'styled-components'

import usePeristedState from '@/utils/usePersistedState'

import Switcher from './components/ui/Switcher/Switcher'
import GlobalStyle from './styles/global'
import dark from './styles/themes/dark'
import light from './styles/themes/light'

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switcher isOn={theme.title === 'light'} handleToggle={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
