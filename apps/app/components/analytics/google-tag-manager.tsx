import Script, { type ScriptProps } from "next/script";

export const GoogleTagManager = (props: ScriptProps) => {
  return (
    <Script id="google-tag-manager" {...props}>
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
      `}
    </Script>
  );
};

export default GoogleTagManager;
