import { createStorefrontClient } from "@shopify/hydrogen-react";

export const publicStorefrontToken = process.env.PUBLIC_STOREFRONT_TOKEN!;
export const storeDomain = process.env.STORE_DOMAIN!;
export const storefrontApiVersion = process.env.STOREFRONT_API_VERSION!;

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
