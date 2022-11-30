import { createStorefrontClient } from "@shopify/hydrogen-react";

export const publicStorefrontToken =
  process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_STOREFRONT_TOKEN!;
export const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
export const storefrontApiVersion =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION!;

export const client = createStorefrontClient({
  storeDomain,
  // TODO: convert to 'privateStorefrontToken'!
  publicStorefrontToken,
  storefrontApiVersion,
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
export const getPublicTokenHeaders = client.getPublicTokenHeaders;
export const getShopifyDomain = client.getShopifyDomain;
