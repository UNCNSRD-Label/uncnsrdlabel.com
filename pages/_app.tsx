import type { AppProps } from "next/app";

import Providers from "#/providers";

import Footer from "#/components/Footer";
import Header from "#/components/Header";

import "#/styles/global/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Providers>
  );
}
