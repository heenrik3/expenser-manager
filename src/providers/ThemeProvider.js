import { useEffect, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('moon')

  const toggleTheme = () => {
    const changed = theme === 'moon' ? 'sun' : 'moon'

    localStorage.setItem('theme', changed)
    setTheme(changed)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) setTheme(savedTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
