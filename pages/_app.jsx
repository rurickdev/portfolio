import Head from 'next/head'

import AppBar from '../components/app_bar'

import '../sass/index.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <Head>
      <title>RurickDev</title>
      <AppBar />
      <Component {...pageProps} />
    </Head>
  )
}

export default MyApp
