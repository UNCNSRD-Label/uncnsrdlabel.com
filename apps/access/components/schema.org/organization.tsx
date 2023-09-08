import { SITE_DOMAIN_WEB } from "@/lib/constants";
import Script from "next/script";

const { NEXT_PUBLIC_SITE_NAME = "UNCNSRD" } = process.env;

export const Organization = () => {
  return (
    <Script id="Organization" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: NEXT_PUBLIC_SITE_NAME,
        url: `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`,
        logo: `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}/opengraph-image`,
        sameAs: [
          "https://tiktok.com/@uncnsrdlabel/",
          "https://www.instagram.com/uncnsrdlabel/",
          "https://www.facebook.com/uncnsrdlabel/",
        ],
      })}
    </Script>
  );
};

export default Organization;
