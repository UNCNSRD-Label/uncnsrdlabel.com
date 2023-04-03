import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

import { dehydrate, QueryClient } from '@tanstack/react-query'
import { clsx } from 'clsx'
import NextError from 'next/error'
import { useRouter } from 'next/router'

import NextQueryParamsProvider from '#/lib/providers/next-query-params'

import { Layout } from '#/components/common'
import { LoadingNotification } from '#/components/ui'

import {
  prefetchShopifyQuery,
  requestShopifyData,
  useShopifyQuery,
} from '#/lib/clients/shopify/graphql'

import { getLocaleProperties } from '#/lib/i18n/utils'

import { getFragmentData } from '#/packages/shopify/generated/fragment-masking'

import {
  PoliciesDocument,
  ShopPolicyInformationFragmentDoc,
} from '#/packages/shopify/generated/graphql'

import styles from './index.module.css'

export async function getStaticPaths(context: GetStaticPathsContext) {
  const { locales } = context

  const responses = await Promise.all(
    locales?.map(async (locale) => {
      const { country } = getLocaleProperties(locale)

      const variables = {
        country,
      }

      const data = await requestShopifyData(PoliciesDocument, variables)

      const localePaths = []

      for (const property in data.shop) {
        if (
          [
            'privacyPolicy',
            'refundPolicy',
            'shippingPolicy',
            'termsOfService',
          ].includes(property)
        ) {
          const policy = getFragmentData(
            ShopPolicyInformationFragmentDoc,
            data.shop[
              property as
                | 'privacyPolicy'
                | 'refundPolicy'
                | 'shippingPolicy'
                | 'termsOfService'
            ]
          )

          if (policy) {
            localePaths.push({
              params: {
                slug: `/policies/${policy?.handle}`,
              },
            })
          }
        }
      }

      return localePaths
    }) ?? []
  )

  const paths = responses?.flat()

  return {
    fallback: true,
    paths,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE, params } = context

  const handle = Array.isArray(params?.slug) ? params?.slug?.[0] : params?.slug

  if (!handle) {
    return {
      notFound: true,
    }
  }

  const { country } = getLocaleProperties(locale)

  const variables = {
    country,
    handle,
  }

  const queryClient = new QueryClient()

  await prefetchShopifyQuery(queryClient, PoliciesDocument, variables)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      variables,
    },
    revalidate: 60,
  }
}

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  context
) => {
  const { asPath, query } = useRouter()

  const { variables } = context

  const { data, error, isFetching } = useShopifyQuery(
    PoliciesDocument,
    variables
  )

  if (isFetching) {
    return <LoadingNotification />
  }

  if (error) {
    console.error({ error })
    return <NextError statusCode={500} message={error} />
  }

  let innerHTML
  let title

  switch (query.slug) {
    case 'privacy-policy':
      {
        const policy = getFragmentData(
          ShopPolicyInformationFragmentDoc,
          data?.shop?.privacyPolicy
        )

        innerHTML = policy?.body
        title = policy?.title
      }
      break
    case 'refund-policy':
      {
        const policy = getFragmentData(
          ShopPolicyInformationFragmentDoc,
          data?.shop?.refundPolicy
        )

        innerHTML = policy?.body
        title = policy?.title
      }
      break
    case 'shipping-policy':
      {
        const policy = getFragmentData(
          ShopPolicyInformationFragmentDoc,
          data?.shop?.shippingPolicy
        )

        innerHTML = policy?.body
        title = policy?.title
      }
      break
    case 'terms-of-service':
      {
        const policy = getFragmentData(
          ShopPolicyInformationFragmentDoc,
          data?.shop?.termsOfService
        )

        innerHTML = policy?.body
        title = policy?.title
      }
      break
    default:
      return <NextError statusCode={404} />
  }

  return (
    <NextQueryParamsProvider>
      <Layout
        classNameDrawerContent={clsx('drawerContentOverflowY')}
        classNameMain={clsx('page', styles.main)}
        shopifyData={data}
        route={asPath}
        showHeaderAndFooter={true}
      >
        {innerHTML && (
          <article className={clsx('wysiwyg')}>
            <h1 className={clsx('heading')}>{title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: innerHTML,
              }}
            />
          </article>
        )}
      </Layout>
    </NextQueryParamsProvider>
  )
}

export default Page
