import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Providers from "#/lib/providers";

import "#/styles/global/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <Providers locale={locale}>
      <Component {...pageProps} />
    </Providers>
  );
}
