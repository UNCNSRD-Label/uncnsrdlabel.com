import Script from "next/script";

const { NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID } = process.env;

export const GoogleAnalytics = () => {
  return (
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID});
        `}
    </Script>
  );
};

export default GoogleAnalytics;
