import Avatar from '../components/avatar'

function NotFound (props) {
  return (
    <main className='header columns is-centered is-multiline is-vcentered is-marginless is-paddingless has-text-centered reverse-columns'>
      <div className='colum is-half'>
        <Avatar name='404' className='' />
      </div>
      <div className='colum is-half'>
        <h1 className='is-size-1 is-fira'>404 Not Found</h1>
      </div>
    </main>
  )
}

export default NotFound
