import '../styles/globals.css'
import Nevbar from "../components/nevbar"

function MyApp({ Component, pageProps }) {
  return <>
  <Nevbar/>
  <Component {...pageProps} />
  </>
  }

export default MyApp
