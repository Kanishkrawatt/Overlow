import '../styles/globals.css'

import Head from 'next/head'
import Nevbar from '../components/Nevbar/nevbar';
import Sidebar from "../components/sidebar";




function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <title>Overlow</title>
  </Head>
  <Sidebar />
  <Nevbar />
  <Component {...pageProps} />

  </>
  }

export default MyApp
