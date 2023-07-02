"use clients";

import { SITE_DOMAIN } from "lib/constants";
import Script from "next/script";

const {
  NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID,
  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  SITE_NAME = "UNCNSRD",
} = process.env;

export const Analytics = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      />
      <Script
        type="application/ld+json"
        id="Organization"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN}`,
            logo: `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN}/opengraph-image`,
            sameAs: [
              "https://tiktok.com/@uncnsrdlabel/",
              "https://www.instagram.com/uncnsrdlabel/",
              "https://www.facebook.com/uncnsrdlabel/",
            ],
          }),
        }}
      />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID);
        `}
      </Script>

      <Script id="google-tag-manager">
        {`
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'denied'
            });

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
        `}
      </Script>
    </>
  );
};

export default Analytics;
