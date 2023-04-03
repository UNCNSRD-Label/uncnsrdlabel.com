import { createStorefrontClient } from '@shopify/hydrogen-react'
import { LATEST_API_VERSION } from '@shopify/shopify-api'

export const privateStorefrontToken =
  process.env.SHOPIFY_PRIVATE_STOREFRONT_TOKEN!
export const publicStorefrontToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!
export const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!
export const storefrontApiVersion = LATEST_API_VERSION

export const client = createStorefrontClient({
  storeDomain,
  privateStorefrontToken,
  publicStorefrontToken,
  storefrontApiVersion,
})

export const getStorefrontApiUrl = client.getStorefrontApiUrl
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders
export const getPublicTokenHeaders = client.getPublicTokenHeaders
export const getShopifyDomain = client.getShopifyDomain

// export const getStorefrontApiUrl = () =>
//   `${storeDomain}/api/${LATEST_API_VERSION}/graphql.json`
