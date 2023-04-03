import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

import { dehydrate, QueryClient } from '@tanstack/react-query'
import { clsx } from 'clsx'
import NextError from 'next/error'
import { useRouter } from 'next/router'

import { Layout } from '#/components/common'
import ConsentTable from '#/components/consent/ConsentTable'
import { LoadingNotification } from '#/components/ui'

import { getLocaleProperties } from '#/lib/i18n/utils'

import {
  prefetchShopifyQuery,
  useShopifyQuery,
} from '#/lib/clients/shopify/graphql'

import { ConsentDocument } from '#/packages/shopify/generated/graphql'

import styles from './index.module.css'

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE } = context

  const { country } = getLocaleProperties(locale)

  const queryClient = new QueryClient()

  const variables = {
    country,
  }

  await prefetchShopifyQuery(queryClient, ConsentDocument, variables)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      variables,
    },
    revalidate: 60,
  }
}

export const Page: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const { asPath } = useRouter()

  const { data, error, isFetching } = useShopifyQuery(ConsentDocument)

  if (isFetching) {
    return <LoadingNotification />
  }

  if (error) {
    console.error({ error })
    return <NextError statusCode={500} message={error} />
  }

  return (
    <Layout
      classNameDrawerContent={clsx('drawerContentOverflowY')}
      classNameMain={clsx(styles.main)}
      shopifyData={data}
      route={asPath}
      showHeaderAndFooter={true}
    >
      <div className={clsx(styles.about, 'prose')}>
        <h2>Consent settings</h2>
        <p>
          Collagerie uses some essential cookies to make this service work, by
          using this website you agree to our cookie policy. We would also like
          to use analytics cookies so we can understand how you use the service
          and make improvements.
        </p>
      </div>
      <ConsentTable className={clsx('col-span-full')} />
    </Layout>
  )
}

export default Page
