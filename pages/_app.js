import Head from 'next/Head'

import './app.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
