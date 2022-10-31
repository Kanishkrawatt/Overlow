import "../styles/globals.css";

import Head from "next/head";
import Nevbar from "../components/Nevbar/nevbar";
import Sidebar from "../components/Sidebar/sidebar" 
import Foot from "../components/Footer/Foot";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Overlow</title>
      </Head>
      <Sidebar />
      <Nevbar />
      <Component {...pageProps} />
      <Foot />
    </>
  );
}

export default MyApp;
