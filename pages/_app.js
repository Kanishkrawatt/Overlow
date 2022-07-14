import '../styles/globals.css'
import Nevbar from "../components/nevbar"
import Head from 'next/head'
import Foot from '../components/Foot'



function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <title>Overlow</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap" rel="stylesheet"/>
  </Head>
  <Nevbar/>
  {/* <Foot/> */}
  <Component {...pageProps} />

  </>
  }

export default MyApp
