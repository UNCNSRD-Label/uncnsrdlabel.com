import Script from "next/script";

const { NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID } = process.env;

export const GoogleTag = () => {
  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
    />
  );
};

export default GoogleTag;
