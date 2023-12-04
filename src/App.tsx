import React from 'react'
import { Outlet } from 'react-router-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import usePeristedState from '@/hooks/usePersistedState'
import GlobalStyle from '@/styles/global'
import dark from '@/styles/themes/dark'
import light from '@/styles/themes/light'

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
