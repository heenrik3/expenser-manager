import { useEffect, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const themes = ['', 'moon']
const preference = window.matchMedia('(prefers-color-scheme: dark)')

const getCurrentTheme = () => {
  return +preference.matches
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes[getCurrentTheme()])

  const toggleTheme = () => {
    setTheme(themes[!getCurrentTheme()])
  }

  const handleThemeChange = (e) => {
    setTheme(themes[+e.matches])
  }

  useEffect(() => {
    preference.addEventListener('change', handleThemeChange)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
