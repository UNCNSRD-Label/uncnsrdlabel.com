import type { NextPage } from 'next'

import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import { Layout } from '#/components/common'

import styles from './error.module.css'

interface ErrorProps {
  statusCode?: number
}

export const Page: NextPage<ErrorProps> = ({ statusCode }) => {
  const { asPath } = useRouter()

  return (
    <Layout
      classNameDrawerContent={clsx('drawerContentOverflowY')}
      classNameMain={clsx(styles.main)}
      route={asPath}
      showHeaderAndFooter={true}
    >
      <section className={clsx(styles.error)}>
        <h1 className={clsx(styles.heading)}>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
      </section>
    </Layout>
  )
}

Page.getInitialProps = ({ res, err }) => {
  let statusCode = 404

  if (res) {
    statusCode = res.statusCode
  } else if (err?.statusCode) {
    statusCode = err.statusCode
  }

  return { statusCode }
}

export default Page
