
function AppBar (props) {
  return (
    <nav className='navbar is-fixed-top is-spaced' role='navigation' aria-label='main navigation'>

      <div className='navbar-brand is-size-3'>
        <div className='navbar-item' />
        <span className='is-fira'>
          Rurick.Dev
        </span>
        <div className='navbar-item'>
          <span className='icon has-text-primary is-size-4'>
            <i className='fas fa-moon' />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default AppBar
