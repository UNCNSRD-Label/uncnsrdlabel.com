import Script, { type ScriptProps } from "next/script";

export const ConsentDefault = (props: ScriptProps) => {
  return (
    <Script id="consent-default" {...props}>
      {`
        gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'denied'
        });
    `}
    </Script>
  );
};

export default ConsentDefault;
