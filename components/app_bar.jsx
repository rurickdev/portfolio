import DarkModeToggler from './dark_mode_toggler'

function AppBar (props) {
  return (
    <nav className='navbar is-fixed-top is-spaced' role='navigation' aria-label='main navigation'>

      <div className='container'>
        <div className='navbar-brand is-size-3'>

          <div className='navbar-item' />

          <div className='navbar-item'>
            <span className='is-fira'>
              Rurick.Dev
            </span>
          </div>

          <div className='navbar-item'>
            <DarkModeToggler />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AppBar
