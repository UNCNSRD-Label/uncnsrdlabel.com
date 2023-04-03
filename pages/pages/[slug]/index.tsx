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
import { NextSeo } from 'next-seo'

import { Layout, Markdown } from '#/components/common'

import { LoadingNotification } from '#/components/ui'

import {
  prefetchContentfulQuery,
  requestContentfulData,
  useContentfulQuery,
} from '#/lib/clients/contentful/graphql'

import { mapLocaleToLocaleUpper } from '#/lib/hooks/i18n'
import { Locale } from '#/lib/i18n/types'

import { getFragmentData } from '#/packages/contentful/generated/fragment-masking'
import {
  PageBasicInformationFragmentDoc,
  PageCollectionBySlugDocument,
  PageCollectionPathsDocument,
} from '#/packages/contentful/generated/graphql'

import styles from './index.module.css'

export async function getStaticPaths(context: GetStaticPathsContext) {
  const { locales } = context

  const responses = await Promise.all(
    locales?.map(async (locale) => {
      const variables = {
        locale: mapLocaleToLocaleUpper[locale as Locale],
      }

      const { pageCollection } = await requestContentfulData(
        PageCollectionPathsDocument,
        variables
      )

      const localePaths = pageCollection?.items.map((item) => ({
        params: { slug: item?.slug },
      }))

      return localePaths
    }) ?? []
  )

  const paths = responses?.flat()

  return { fallback: true, paths }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale, params, preview = false } = context

  const queryClient = new QueryClient()

  const slug = `/pages/${params?.slug}`

  const variables = {
    locale: mapLocaleToLocaleUpper[locale as Locale],
    preview,
    slug,
  }

  await prefetchContentfulQuery(
    queryClient,
    PageCollectionBySlugDocument,
    variables
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug,
      variables,
    },
    revalidate: 60,
  }
}

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  context
) => {
  const { variables } = context

  const { asPath } = useRouter()

  const { data, error, isFetching } = useContentfulQuery(
    PageCollectionBySlugDocument,
    variables
  )

  if (isFetching) {
    return <LoadingNotification />
  }

  if (error) {
    console.error({ error })
    return <NextError statusCode={500} message={error} />
  }

  const page = getFragmentData(
    PageBasicInformationFragmentDoc,
    data?.pageCollection?.items?.[0]
  )

  return (
    <>
      {page && (
        <NextSeo
          {...(page.metaTitle && {
            title: page.metaTitle,
          })}
          {...(page.metaDescription && {
            description: page.metaDescription,
          })}
        />
      )}
      <Layout
        classNameDrawerContent={clsx('drawerContentOverflowY')}
        classNameMain={clsx(styles.main)}
        route={asPath}
        showHeaderAndFooter={true}
      >
        <article className={clsx('wysiwyg', styles.article)}>
          {page?.title && <h1 className={clsx('heading')}>{page?.title}</h1>}
          {page?.content && <Markdown>{page?.content}</Markdown>}
        </article>
      </Layout>
    </>
  )
}

export default Page
