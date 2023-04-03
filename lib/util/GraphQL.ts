import type { ParsedMetafields } from '@shopify/hydrogen-react'

import type {
  Page,
  Product,
  ProductMetafieldArgs,
  ProductVariant,
  ProductVariantMetafieldArgs,
} from '@shopify/hydrogen-react/storefront-api-types'
import type { PartialDeep } from 'type-fest'

import { parseMetafield } from '@shopify/hydrogen-react'

export const getAdditionalImages = (
  selectedVariant?: PartialDeep<
    ProductVariant,
    { recurseIntoArrays: true }
  > | null
) => {
  if (!selectedVariant) {
    return
  }

  const additional_media = getMetafield<
    ParsedMetafields['list.file_reference']
  >(selectedVariant, {
    namespace: 'custom',
    key: 'additional_media',
  })

  // TODO: Check use of ts-ignore
  const additional_images = additional_media?.parsedValue
    // @ts-ignore
    ?.filter((medium) => medium?.mediaContentType === 'IMAGE')

  const imageNodes = additional_images?.map(({ previewImage }) => previewImage)

  return imageNodes
}

export const getColorHexCodeByName = (
  colorName: string,
  variants:
    | (
        | PartialDeep<
            ProductVariant,
            {
              recurseIntoArrays: true
            }
          >
        | undefined
      )[]
    | undefined
) => {
  const variant = variants?.find((v) =>
    v?.selectedOptions?.find(
      (selectedOption) => selectedOption?.value === colorName
    )
  )

  if (!variant) {
    return undefined
  }

  const metafield = getMetafield<ParsedMetafields['color']>(variant, {
    namespace: 'custom',
    key: 'color',
  })

  if (metafield == null) {
    return undefined
  }

  return metafield?.value
}

export const getComplementaryProducts = (
  selectedVariant?: PartialDeep<
    ProductVariant,
    { recurseIntoArrays: true }
  > | null
) => {
  if (!selectedVariant) {
    return
  }

  const complementary_products = getMetafield<
    ParsedMetafields['list.product_reference']
  >(selectedVariant, {
    namespace: 'custom',
    key: 'complementary_products',
  })

  const products = complementary_products?.parsedValue

  return products
}

export const getRelatedProducts = (
  selectedVariant?: PartialDeep<
    ProductVariant,
    { recurseIntoArrays: true }
  > | null
) => {
  if (!selectedVariant) {
    return
  }

  const complementary_products = getMetafield<
    ParsedMetafields['list.product_reference']
  >(selectedVariant, {
    namespace: 'shopify--discovery--product_recommendation',
    key: 'related_products',
  })

  const products = complementary_products?.parsedValue

  return products
}

export const getMaterialImage = (
  selectedVariant?: PartialDeep<
    ProductVariant,
    { recurseIntoArrays: true }
  > | null
) => {
  if (!selectedVariant) {
    return
  }

  const material_image = getMetafield<ParsedMetafields['file_reference']>(
    selectedVariant,
    {
      namespace: 'custom',
      key: 'material_image',
    }
  )

  const materialImage = material_image?.parsedValue?.previewImage

  return materialImage
}

export const getMedia = (
  page?: PartialDeep<Page, { recurseIntoArrays: true }> | null
) => {
  if (!page) {
    return
  }

  const media = getMetafield<ParsedMetafields['list.file_reference']>(page, {
    namespace: 'custom',
    key: 'media',
  })

  // TODO: Check use of ts-ignore
  const images = media?.parsedValue
    // @ts-ignore
    ?.filter((medium) => medium?.mediaContentType === 'IMAGE')

  const imageNodes = images?.map(({ previewImage }) => previewImage)

  return imageNodes
}

export const getMetafield = <T>(
  productOrProductVariant: PartialDeep<
    Page | Product | ProductVariant,
    { recurseIntoArrays: true }
  >,
  { key, namespace }: ProductMetafieldArgs | ProductVariantMetafieldArgs
) => {
  const metafield = productOrProductVariant.metafields?.find(
    (meta) => meta?.namespace === namespace && meta?.key === key
  )

  if (metafield == null) {
    return undefined
  }

  try {
    const parsedMetafield = parseMetafield<T>(metafield)

    return parsedMetafield
  } catch (error) {
    console.error(error)
  }
}

export const getMetafieldForSchemaOrg = <T>(
  productOrProductVariant: PartialDeep<
    Product | ProductVariant,
    { recurseIntoArrays: true }
  >,
  { key, namespace }: ProductMetafieldArgs | ProductVariantMetafieldArgs
) => {
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars,unused-imports/no-unused-vars
  const parsedMetafield = getMetafield<T>(productOrProductVariant, {
    key,
    namespace,
  })

  let value

  // if (parsedMetafield?.boolean) {
  //   value = Boolean(parsedMetafield.boolean);
  // }

  // let value = {
  //   ...(parsedMetafield?.boolean && { boolean: Boolean(parsedMetafield.boolean) }),
  //   ...(parsedMetafield?.color && { color: parsedMetafield.color }),
  // }

  // TODO: Investigate use of coercion to any
  return value as unknown as string
}
