import Head from 'next/head'

import './app.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>V60</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
