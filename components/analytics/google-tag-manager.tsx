import Script, { type ScriptProps } from "next/script";

const { NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID } = process.env;

export const GoogleTagManager = (props: ScriptProps) => {
  return (
    <Script id="google-tag-manager" {...props}>
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
  );
};

export default GoogleTagManager;
