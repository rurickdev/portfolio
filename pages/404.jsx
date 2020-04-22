function NotFound (props) {
  return (
    <main className='columns is-centered is-vcentered is-marginless is-paddingless has-text-centered'>
      <div className='colum is-one-third'>
        <figure className='image is-404'>
          <img src='https://s3.us-east-2.amazonaws.com/cdn.rurick.dev/assets/img/404.jpg' alt='' srcset='' />
        </figure>
      </div>
      <div className='colum is-one-third'>
        <h1 className='is-size-1'>404 Not Found</h1>
      </div>
    </main>
  )
}

export default NotFound
