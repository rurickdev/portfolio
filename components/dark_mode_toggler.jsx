
import { useState, useEffect } from 'react'

function DarkModeToggler (props) {
  const [theme, setTheme] = useState('light')
  const [icon, setIcon] = useState('moon')

  function toggleTeam () {
    if (theme === 'light') {
      setTheme('dark')
      return
    }
    setTheme('light')
  }

  function toggleIcon () {
    if (theme === 'light') {
      setIcon('moon')
      return
    }
    setIcon('sun')
  }

  useEffect(() => {
    const storageTheme = localStorage.getItem('data-theme')
    if (storageTheme) {
      setTheme(storageTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    toggleIcon()
    localStorage.setItem('data-theme', theme)
  }, [theme])

  return (
    <span className='has-cursor-pointer icon is-size-4' onClick={toggleTeam} title='toggle dark mode'>
      <i className={`fas fa-${icon}`} aria-hidden />
    </span>
  )
}

export default DarkModeToggler
