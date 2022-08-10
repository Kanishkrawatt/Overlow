import '../styles/globals.css'
import Nevbar from "../components/nevbar"
import Head from 'next/head'
import Sidebar from "../components/sidebar";




function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <title>Overlow</title>
  </Head>
  <Nevbar/> 
  <Sidebar />
  
  <Component {...pageProps} />

  </>
  }

export default MyApp
