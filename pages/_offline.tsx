import type { NextPage } from 'next'

import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import { Layout } from '#/components/common'

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 300,
  }
}

export const Page: NextPage = () => {
  const { asPath } = useRouter()

  return (
    <Layout
      classNameDrawerContent={clsx('drawerContentOverflowY')}
      route={asPath}
      showHeaderAndFooter={true}
    >
      <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
        <h2>Site offline</h2>
        <span className="">The site is currently offline.</span>
      </div>
    </Layout>
  )
}

export default Page
