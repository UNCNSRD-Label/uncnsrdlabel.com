import Script, { type ScriptProps } from "next/script";

export const GoogleAnalytics = (props: ScriptProps) => {
  return (
    <Script id="google-analytics" {...props}>
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}');
        `}
    </Script>
  );
};

export default GoogleAnalytics;
