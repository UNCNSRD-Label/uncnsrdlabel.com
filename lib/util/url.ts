import type {
  Product,
  ProductVariant,
} from '@shopify/hydrogen-react/storefront-api-types'
import type { PartialDeep } from 'type-fest'

export const formatSlug = (str: string) =>
  str.startsWith('/') ? str : `/${str}`

export const getProductCategoryURL = (
  product: PartialDeep<Product, { recurseIntoArrays: true }>
) => `/collections/${product.handle}`

export const getProductURL = (
  product: PartialDeep<Product, { recurseIntoArrays: true }>
) => `/products/${product.handle}`

export const getProductVariantURL = (
  product: PartialDeep<Product, { recurseIntoArrays: true }>,
  _: PartialDeep<ProductVariant, { recurseIntoArrays: true }>
) => `/products/${product.handle}`

export const getShopUrl = (slug: string) =>
  `${process.env.NEXT_PUBLIC_PROTOCOL}://${
    process.env.NEXT_PUBLIC_SHOP_URL
  }${formatSlug(slug)}`
