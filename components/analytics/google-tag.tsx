import Script, { type ScriptProps } from "next/script";

export const GoogleTag = (props: ScriptProps) => {
  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      {...props}
    />
  );
};

export default GoogleTag;
