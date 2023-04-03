import type { StorefrontApiResponseOk } from '@shopify/hydrogen-react'
import type { GetServerSideProps } from 'next'

import type { AccountQuery } from '#/packages/shopify/generated/graphql'

import { clsx } from 'clsx'
import { useRouter } from 'next/router'
import { request } from 'graphql-request'
import NextError from 'next/error'

import { createRef } from 'react'

import AccountCreateForm from '#/components/account/AccountCreateForm'
import AccountSignInForm from '#/components/account/AccountSignInForm'
import Layout from '#/components/common/Layout'

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from '#/lib/clients/shopify/storefront'

// TODO: Import generated code
import document from '#/packages/shopify/src/queries/Account.graphql'

import styles from './index.module.css'

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const requestHeaders = getPublicTokenHeaders()
    const url = getStorefrontApiUrl()

    const data = await request({
      url,
      document,
      // requestHeaders: getPrivateTokenHeaders({buyerIp}),
      requestHeaders,
    })

    // TODO I don't love how we do this with 'errors' and 'data'
    return { props: { data, errors: null } }
  } catch (err) {
    console.error({ err })
    return { props: { data: null, errors: [(err as NextError).toString()] } }
  }
}

export default function Page({
  data,
  errors,
}: StorefrontApiResponseOk<AccountQuery>) {
  const scrollingElement = createRef<HTMLDivElement>()

  const { asPath } = useRouter()

  if (!data) {
    console.error({ errors })
    return <NextError statusCode={404} />
  }

  if (errors) {
    console.error({ errors })
    return <NextError statusCode={500} />
  }

  return (
    <Layout
      classNameDrawerContent={clsx(
        styles.drawerContent,
        'drawerContentOverflowY'
      )}
      classNameMain={clsx(styles.main)}
      shopifyData={data}
      ref={scrollingElement}
      route={asPath}
      showHeaderAndFooter={true}
    >
      <AccountCreateForm />
      <AccountSignInForm />
    </Layout>
  )
}
