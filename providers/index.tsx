import { ReactNode } from "react";

import NextQueryParamsProvider from "./next-query-params";
import ShopifyProvider from "./shopify";

export default function Providers({
  children,
  locale,
}: {
  children: ReactNode;
  locale?: string;
}) {
  const storefrontToken =
    process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_STOREFRONT_TOKEN!;
  const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
  const storefrontApiVersion =
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION!;

  const shopifyConfig = {
    locale,
    storeDomain,
    storefrontApiVersion,
    storefrontToken,
  };

  return (
    <ShopifyProvider shopifyConfig={shopifyConfig}>
      <NextQueryParamsProvider>{children}</NextQueryParamsProvider>
    </ShopifyProvider>
  );
}
