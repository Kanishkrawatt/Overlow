import '../styles/globals.css'
import Nevbar from "../components/nevbar"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <title>Overlow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Nevbar/>
  <Component {...pageProps} />
  </>
  }

export default MyApp
