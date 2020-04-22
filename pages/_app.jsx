import Head from 'next/head'

import '../sass/index.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <Head>
      <title>RurickDev</title>
      <Component {...pageProps} />
    </Head>
  )
}

export default MyApp
