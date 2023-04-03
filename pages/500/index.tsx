import type { InferGetStaticPropsType, NextPage } from 'next'

import { clsx } from 'clsx'
import { useRouter } from 'next/router'
import { FormEventHandler } from 'react'
import { SearchBox } from 'react-instantsearch-hooks-web'

import { Layout } from '#/components/common'
import { AlgoliaSearch } from '#/components/search'

import { BASE_URL, SEARCH_SUGGESTIONS_ITEMS } from '#/lib/constants/config'

import { trackSearch } from '#/lib/util/tracking'

import styles from '../error.module.css'

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}`
  return {
    props: {
      enableCart: true,
      url,
    },
    revalidate: 60,
  }
}

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  context
) => {
  const router = useRouter()

  const pathname = `/search`

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    // @ts-ignore
    const query = event.target[0].value

    trackSearch({
      query,
      view: '404',
      event: 'submit',
    })

    const route = {
      pathname,
      query: { query },
    }

    router.push(route)
  }

  const queryHook = (query: string, hook: (_: string) => void) => {
    if (query.length > 2) {
      hook(query)

      trackSearch({
        query,
        view: 'search',
        event: 'query',
      })
    }
  }

  const { enableCart, url } = context

  const { asPath } = useRouter()

  const path = 'search'

  return (
    <Layout
      classNameDrawerContent={clsx('drawerContentOverflowY')}
      classNameMain={clsx(styles.main)}
      enableCart={enableCart}
      route={asPath}
      showHeaderAndFooter={true}
    >
      <section className={clsx(styles.error)}>
        <h1 className={clsx(styles.heading)}>
          An unknown error occurred on server
        </h1>
      </section>

      <AlgoliaSearch
        className="preview"
        gridType={'preview'}
        hitsPerPage={SEARCH_SUGGESTIONS_ITEMS}
        path={path}
        showPagination={false}
        showResults={false}
        url={url}
      >
        <SearchBox
          className="main"
          placeholder="Search"
          onSubmit={onSubmit}
          queryHook={queryHook}
        />
      </AlgoliaSearch>
    </Layout>
  )
}

export default Page
