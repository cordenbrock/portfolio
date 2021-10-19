import Head from "next/head";
import Layout from "@Formatting/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>&lt; &nbsp; C N &nbsp; / &gt;</title>
        <meta
          name="description"
          content="Portfolio of the real Cory Nordenbrock. Maker. Tinker. Creative. Full-stack developer by day. Tambourine Virtuoso by night."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:" content="< CN />" />
        <meta property="og:image" content="https://www.corynordenbrock.com/cn.png" />
        <meta property="og:description" content="Portfolio of the real Cory Nordenbrock. Maker. Tinker. Creative. Full-stack developer by day. Tambourine Virtuoso by night." />
        <meta property="og:url" content="https://www.corynordenbrock.com/" />
        <meta property="og:image:width" content="1366" />
        <meta property="og:image:height" content="768" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
