// import { useContext } from 'react'
// import ThemeContext from '../../contexts/ThemeContext'

function Header() {
  // const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="header">
      <h3 className="header__logo">Gerenciador de despesas</h3>

      {/* <div className="header__actions">
        <button className="header__theme" onClick={toggleTheme}>
          <i className={`fa-solid fa-${theme === 'moon' ? 'sun' : 'moon'}`}></i>
        </button>
      </div> */}
    </header>
  )
}

export default Header
