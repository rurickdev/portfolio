import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='theme-color' content='#000000' />
          {/* Fabicon */}
          <link rel='icon' type='image/png' href='https://s3.us-east-2.amazonaws.com/cdn.rurick.dev/assets/img/favicon.png' />
          {/* Web Preview Tags */}
          <meta property='og:title' content='Rurick Dev' />
          <meta property='og:description' content='Full Stack Developer' />
          <meta property='og:image:secure_url' content='https://s3.us-east-2.amazonaws.com/cdn.rurick.dev/assets/img/web_preview.png' />
          <meta property='og:image' content='http://s3.us-east-2.amazonaws.com/cdn.rurick.dev/assets/img/web_preview.png' />
          <meta property='og:image:alt' content='The Business card of Rurick Dev' />
          <meta property='og:url' content='https://rurick.dev' />
          <meta name='twitter:card' content='summary_large_image' />
        </Head>
        <body className='has-navbar-fixed-top'>
          <Main />
          <NextScript />
          {/* FontAwesome Icons */}
          <script src='https://kit.fontawesome.com/846cbbb684.js' crossOrigin='anonymous' />
        </body>
      </Html>
    )
  }
}

export default MyDocument
