import type { AppProps } from "next/app";

import { getCookie, hasCookie } from "cookies-next";
import { useRouter } from "next/router";
import Script from "next/script";

import Providers from "#/lib/providers";

import "#/styles/global/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  const hasSavedConsentSettings = hasCookie("consentSettings");
  const consentSettings = getCookie("consentSettings");
  console.log({ consentSettings });
  console.assert(
    hasSavedConsentSettings === true,
    "hasSavedConsentSettings not saved"
  );
  return (
    <Providers locale={locale}>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
        }}
      />
      {hasSavedConsentSettings === true && (
        <Script
          id="consent-update"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', ${consentSettings});
          `,
          }}
        />
      )}
      <Component {...pageProps} />
    </Providers>
  );
}
