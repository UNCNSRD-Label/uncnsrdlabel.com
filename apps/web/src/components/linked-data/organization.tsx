import {
  getFragmentData,
  getInContextVariables,
  getShopifyGraphQL,
  imageFragment,
  shopDetailsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { SITE_DOMAIN_WEB } from "@uncnsrdlabel/lib";
import Script from "next/script";
import { Organization as OrganizationSchema, WithContext } from "schema-dts";

export async function LinkedDataOrganization({
  id,
  lang,
}: {
  id?: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const inContextVariables = getInContextVariables(lang);

  const { shop } = await getShopifyGraphQL(
    shopDetailsQuery,
    inContextVariables,
  );

  const description = shop.brand?.shortDescription ?? shop.description;

  const coverImage = getFragmentData(
    imageFragment,
    shop.brand?.coverImage?.image,
  );

  const logoImage = getFragmentData(imageFragment, shop.brand?.logo?.image);

  const image =
    coverImage?.url ??
    `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}/opengraph-image.jpg`;

  const logo = logoImage?.url;

  const name = shop.name;

  const sameAs = [
    "https://tiktok.com/@uncnsrdlabel/",
    "https://www.instagram.com/uncnsrdlabel/",
    "https://www.facebook.com/uncnsrdlabel/",
  ];

  const slogan = shop.brand?.slogan;

  const url = `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`;

  const jsonLd: WithContext<OrganizationSchema> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    brand: {
      "@type": "Brand",
      ...(description && { description }),
      image,
      name,
      logo,
      sameAs,
      ...(slogan && { slogan }),
      url,
    },
    ...(description && { description }),
    email: process.env.NEXT_PUBLIC_GENERAL_EMAIL,
    foundingDate: "2022-12-16T00:00:00.000Z",
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      url: `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}/policies/refund-policy`,
    },
    image,
    legalName: process.env.NEXT_PUBLIC_LEGAL_NAME,
    logo,
    name,
    sameAs,
    ...(slogan && { slogan }),
    taxID: process.env.NEXT_PUBLIC_ABN,
    url,
  };

  return (
    <Script
      id={id ?? "LinkedDataOrganization"}
      key={id ?? "LinkedDataOrganization"}
      strategy="lazyOnload"
      type="application/ld+json"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
