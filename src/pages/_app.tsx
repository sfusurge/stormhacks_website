import type { AppProps } from "next/app";
import { Metadata } from "next";
import { appWithTranslation } from "next-i18next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Stormhacks 2024",
  description:
    "Simon Fraser University's largest MLH-accredited hackathon, Stormhacks, returns flly in-person for its 4th iteration in 2024!",
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
