import type { StorefrontApiResponseOk } from '@shopify/hydrogen-react'
import type {
  Image as ShopifyBasicImageProps,
  Maybe,
  Product as ShopifyProduct,
  ProductVariant as ShopifyProductVariant,
} from '@shopify/hydrogen-react/storefront-api-types'
import type { ImageProps as NextImageProps } from 'next/image'
import type { CSSProperties } from 'react'
import type { ReactPlayerProps } from 'react-player'

import type { Asset as ContentfulBasicAssetProps } from '#/packages/contentful/generated/graphql'
import type {
  ImageBasicInformationFragment,
  ProductsByNodeIdQuery,
} from '#/packages/shopify/generated/graphql'

import { request } from 'graphql-request'

import {
  getPublicTokenHeaders,
  getStorefrontApiUrl,
} from '#/lib/clients/shopify/storefront'

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from '#/lib/constants/messages'

import { getLocaleProperties } from '#/lib/i18n/utils'

import ProductsByNodeId from '#/packages/shopify/src/queries/ProductsByNodeId.graphql'
import { Locale } from '#/lib/i18n/types'

export type CustomImageProps = {
  classNameFigure?: string
  classNameImage?: string
  figcaption?: string
  shadowOrientation?: 'start' | 'end'
  styleFigure?: CSSProperties
  styleImage?: CSSProperties
}

export type ImageProps = Omit<NextImageProps, 'src'> &
  CustomImageProps & {
    alt: string
    src: string
  }

export type ContentfulAssetProps = Partial<ContentfulBasicAssetProps> &
  Pick<NextImageProps, 'fill' | 'priority' | 'sizes'> &
  CustomImageProps

export type ShopifyImageProps = Omit<
  Partial<ImageBasicInformationFragment | ShopifyBasicImageProps>,
  'originalSrc' | 'src' | 'transformedSrc'
> &
  Pick<NextImageProps, 'fill' | 'priority' | 'sizes' | 'title'> &
  CustomImageProps

export type VideoProps = ReactPlayerProps

// export const normaliseAlgolialImage = ({
//   url: src,
//   ...image
// }: AlgoliaImageProps): NextImageProps => ({
//   ...image,
//   alt: image.altText,
//   src,
// })

// export const normaliseAlgolialImages = (
//   images: AlgoliaImageProps[]
// ): NextImageProps[] => images?.map((image) => normaliseAlgolialImage(image))

const getShopifyResponse = async ({
  ids,
  locale,
}: {
  ids?: Maybe<Maybe<string>[]>
  locale?: Locale
}) => {
  const { country } = getLocaleProperties(locale)

  try {
    if (ids == null) {
      throw new Error('No product identifiers passed to getShopifyResponse')
    }

    const requestHeaders = getPublicTokenHeaders()
    // const requestHeaders = getPrivateTokenHeaders()
    const url = getStorefrontApiUrl()
    const variables = {
      country,
      ids,
    }

    const data: ProductsByNodeIdQuery = await request({
      url,
      document: ProductsByNodeId,
      requestHeaders,
      variables,
    })

    return { data }
  } catch (err) {
    console.error({ err })
    return { data: null, errors: [{ message: (err as Error).toString() }] }
  }
}

export const normaliseContentfulImage = (
  image?: ContentfulAssetProps | null
): ImageProps | undefined => {
  if (image == null || image.url == null) {
    // throw new Error('No fileName attribute supplied for image')
    return undefined
  }

  return {
    alt: image.description ?? IMAGE_ALT_TEXT_FALLBACK,
    fill: image.fill,
    sizes: image.sizes,
    src: image.url,
    title: image.title ?? IMAGE_TITLE_FALLBACK,
    ...(image?.height && { height: image.height }),
    ...(image?.width && { width: image.width }),
  }
}

export const normaliseContentfulProductIds = async ({
  ids,
  locale,
}: {
  ids: Maybe<Maybe<string>[]> | undefined
  locale?: Locale
}): Promise<ShopifyProduct[] | undefined> => {
  const filteredIds = ids?.filter(Boolean).filter((id) => id != null) ?? []

  const response: StorefrontApiResponseOk<ProductsByNodeIdQuery> =
    await getShopifyResponse({ ids: filteredIds, locale })

  const { data } = response

  return data?.nodes.map((node) => (node as ShopifyProductVariant)?.product)
}

export const normaliseContentfulImages = (
  images: ContentfulAssetProps[]
): Array<ImageProps | undefined> =>
  images?.map((image) => normaliseContentfulImage(image))

export const normaliseContentfulVideo = (
  video?: ContentfulAssetProps | null
): VideoProps | undefined => {
  if (video == null || video.url == null) {
    // throw new Error('No url attribute supplied for video')
    return undefined
  }

  const props: VideoProps = {
    alt: video.description ?? IMAGE_ALT_TEXT_FALLBACK,
    src: video.fileName,
    title: video.title ?? IMAGE_TITLE_FALLBACK,
    ...(video?.height && { height: video.height }),
    ...(video?.width && { width: video.width }),
  }

  return props
}

export const normaliseContentfulVideos = (
  videos: ContentfulAssetProps[]
): Array<VideoProps | undefined> =>
  videos?.map((video) => normaliseContentfulVideo(video))

export const normaliseShopifyImage = (
  image?: ShopifyImageProps | null
): ImageProps | undefined => {
  if (image?.url == null) {
    // throw new Error(
    //   `No url attribute supplied for image: ${JSON.stringify(image)}`
    // )
    return undefined
  }

  return {
    alt: image.altText ?? IMAGE_ALT_TEXT_FALLBACK,
    classNameFigure: image.classNameFigure,
    classNameImage: image.classNameImage,
    fill: image.fill,
    sizes: image.sizes,
    src: image.url,
    title: image.title ?? IMAGE_TITLE_FALLBACK,
    ...(image?.height && { height: image.height }),
    ...(image?.width && { width: image.width }),
  }
}

export const normaliseShopifylImages = (
  images: ShopifyImageProps[]
): Array<ImageProps | undefined> =>
  images?.map((image) => normaliseShopifyImage(image))
