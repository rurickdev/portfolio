import Avatar from '../components/avatar'

function NotFound (props) {
  return (
    <main className='columns is-centered is-vcentered is-marginless is-paddingless has-text-centered'>
      <div className='colum is-one-third'>
        <Avatar name='404' />
      </div>
      <div className='colum is-one-third'>
        <h1 className='is-size-1'>404 Not Found</h1>
      </div>
    </main>
  )
}

export default NotFound
