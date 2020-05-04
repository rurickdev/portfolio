
import { useState, useEffect } from 'react'

function DarkModeToggler (props) {
  const [theme, setTheme] = useState('light')
  const [icon, setIcon] = useState('moon')

  function toggleTeam () {
    if (theme === 'light') {
      setTheme('dark')
      setIcon('sun')
      return
    }
    setTheme('light')
    setIcon('moon')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <span className='has-cursor-pointer icon has-text-primary is-size-4' onClick={toggleTeam}>
      <i className={`fas fa-${icon}`} aria-hidden />
    </span>
  )
}

export default DarkModeToggler
