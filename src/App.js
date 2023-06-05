import { useContext } from 'react'
import Expenses from './components/Expenses'
import Header from './components/Header'
import ThemeContext from './contexts/ThemeContext'
import './style/main.sass'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Expenses />
    </div>
  )
}

export default App
