import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import Nevbar from "../components/Nevbar/nevbar";
import Sidebar from "../components/Sidebar/sidebar";
import Foot from "../components/Footer/Foot";
import Router from "next/router";
import { Grid } from "react-loader-spinner";
import styled from "styled-components";

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Loading>
          <Grid
            height="100"
            width="100"
            color="#white"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Loading>
      ) : (
        <>
          <Head>
            <title>Overlow</title>
          </Head>
          <Sidebar />
          <Nevbar />
          <Component {...pageProps} />
          <Foot />
        </>
      )}
    </>
  );
}
