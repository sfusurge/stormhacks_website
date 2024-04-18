import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import "../globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StormHacks 2024</title>
        <meta
          name="description"
          content="Simon Fraser University's largest MLH-accredited hackathon, Stormhacks, returns fully in-person for its 4th iteration in 2024!"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);