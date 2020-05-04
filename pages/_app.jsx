import Head from 'next/head'

import AppBar from '../components/app_bar'

import '../sass/index.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RurickDev</title>
      </Head>
      <AppBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
