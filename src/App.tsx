import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'

import usePeristedState from '@/utils/usePersistedState'

import GlobalStyle from '@/styles/global'
import dark from '@/styles/themes/dark'
import light from '@/styles/themes/light'
import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import Footer from '@/components/Footer/Footer'

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header onSwitchTheme={toggleTheme} />
      <Banner />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default App
