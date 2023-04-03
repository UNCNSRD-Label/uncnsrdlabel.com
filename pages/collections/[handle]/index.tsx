import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import {
  type InstantSearchServerState,
  type SortByProps,
  useSortBy,
} from 'react-instantsearch-hooks-web'
import type { SetOptional } from 'type-fest'

import { clsx } from 'clsx'
import { NextSeo } from 'next-seo'
import { type ChangeEvent } from 'react'
import { renderToString } from 'react-dom/server'
import { getServerState } from 'react-instantsearch-hooks-server'

import { normaliseShopifyImage } from '#/lib/util/normalise'

import { Image, Layout } from '#/components/common'
import { AlgoliaSearch } from '#/components/search'

import { requestShopifyData } from '#/lib/clients/shopify/graphql'

import { BASE_URL, SEARCH_RESULTS_ITEMS } from '#/lib/constants/config'

import { indexName, VirtualSearchBox } from '#/lib/util/algolia'
import { getLocaleProperties } from '#/lib/i18n/utils'
import { track } from '#/lib/util/tracking'

import { getFragmentData } from '#/packages/shopify/generated/fragment-masking'
import {
  CollectionByHandleDocument,
  CollectionsPathsDocument,
  ImageBasicInformationFragmentDoc,
} from '#/packages/shopify/generated/graphql'

import styles from '../../collections/[handle]/index.module.css'

const attribute = 'collections'

export async function getStaticPaths(context: GetStaticPathsContext) {
  const { locales } = context

  const responses = await Promise.all(
    locales?.map(async (locale) => {
      const { country } = getLocaleProperties(locale)

      const variables = {
        country,
      }

      const { collections } = await requestShopifyData(
        CollectionsPathsDocument,
        variables
      )

      const localePaths = collections.nodes
        .filter((node) => node.hasOwnProperty('handle'))
        .filter(({ handle }) => handle !== 'just-in')
        .map(({ handle }) => ({
          params: {
            handle,
          },
        }))

      return localePaths
    }) ?? []
  )

  const paths = responses?.flat()

  return { fallback: true, paths }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE, params } = context

  const handle = Array.isArray(params?.handle)
    ? params?.handle?.[0]
    : params?.handle

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

  const { collection } = await requestShopifyData(
    CollectionByHandleDocument,
    variables
  )

  const path = `/collections/${handle}`
  const query = `/collection/${handle}`

  const url = `${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}${path}`

  const serverState: InstantSearchServerState = await getServerState(
    <Page
      collection={collection}
      enableCart={false}
      handle={handle}
      locale={locale}
      path={path}
      query={query}
      url={url}
    />,
    { renderToString }
  )

  return {
    props: {
      collection,
      enableCart: true,
      handle,
      locale,
      path,
      query,
      serverState,
      url,
    },
    revalidate: 60,
  }
}

export const Page: NextPage<
  SetOptional<InferGetStaticPropsType<typeof getStaticProps>, 'serverState'>
> = (context) => {
  const { collection, enableCart, handle, path, query, serverState, url } =
    context

  function CustomSortBy(props: SortByProps) {
    const { options, refine } = useSortBy(props)

    return (
      <div className={clsx('ais-SortBy')}>
        <select
          className={clsx('ais-SortBy-select', 'select-transparent')}
          onChange={(event: ChangeEvent) => {
            refine((event.target as HTMLSelectElement).value)

            track('AlgoliaSortBy', {
              event: 'click',
              index: (event.target as HTMLSelectElement).value,
            })
          }}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  const sortByItems = [
    { label: 'New In', value: `${indexName}_published_at_desc` },
    {
      label: 'Price (Low to High)',
      value: `${indexName}_price_asc`,
    },
    {
      label: 'Price (High to Low)',
      value: `${indexName}_price_desc`,
    },
  ]

  // TODO: Uncomment these lines when these collections have been merchandised
  if (['clothing', 'dresses', 'interiors'].includes(handle)) {
    sortByItems.push({ label: 'Featured', value: `${indexName}` })
  }

  const image = getFragmentData(
    ImageBasicInformationFragmentDoc,
    collection?.image
  )

  const collectionImage = normaliseShopifyImage(image)

  return (
    <>
      <NextSeo
        title={collection?.seo.title ?? collection?.title}
        description={collection?.seo.description ?? collection?.description}
        openGraph={{
          title: collection?.seo.title ?? collection?.title,
          description: collection?.seo.description ?? collection?.description,
          ...(collectionImage && {
            images: [
              {
                alt: collection?.seo.title ?? collection?.title,
                height: 600,
                type: 'image/jpeg',
                url: collectionImage.src,
                width: 800,
              },
            ],
          }),
        }}
      />
      <Layout
        classNameDrawerContent={clsx('drawerContentOverflowY')}
        classNameMain={clsx(styles.main)}
        enableCart={enableCart}
        route={`/collections/${handle}`}
        showHeaderAndFooter={true}
      >
        <header className={clsx(styles.header, 'header')}>
          {collectionImage && (
            <div className={styles.imageWrapper}>
              <Image
                {...collectionImage}
                alt={collectionImage.alt}
                classNameFigure={styles.figure}
                classNameImage={styles.image}
                styleFigure={{
                  color: '#82aae6',
                }}
              />
              <div className={styles.tab} />
            </div>
          )}
          <div className={styles.copy}>
            {collection?.title && (
              <h2 className={clsx(styles.title, 'title')}>
                {collection?.title}
              </h2>
            )}
            {collection?.descriptionHtml && (
              <div
                className={clsx(styles.description, 'description')}
                dangerouslySetInnerHTML={{
                  __html: collection?.descriptionHtml,
                }}
              />
            )}
          </div>
        </header>
        <AlgoliaSearch
          attribute={attribute}
          category={handle}
          className={clsx('page', styles.algoliaSearch)}
          gridType={'page'}
          hitsPerPage={SEARCH_RESULTS_ITEMS}
          path={path}
          query={query}
          serverState={serverState}
          showPagination={true}
          showResults={true}
          url={url}
        >
          <menu className={clsx('refinements', styles.refinements)}>
            <CustomSortBy items={sortByItems} />
          </menu>
          <VirtualSearchBox />
        </AlgoliaSearch>
      </Layout>
    </>
  )
}

export default Page
