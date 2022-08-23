import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'

import styles from './index.module.css'

import Layout from '@components/layout'

type Props = {
  children?: React.ReactNode
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>UNCNSRD - Home</title>
      </Head>

      {/* <div className={styles.imageContainer}>
        <Image
          alt="Lips on a lollipop"
          fill
          sizes="25vw"
          src="/images/lollipop/tmp1.jpg"
        />
      </div> */}

      <h1 className={styles.title}>
        Welcome to{" "}
        <Link href="https://www.uncnsrd.com" passHref>
          <a>uncnsrd.com</a>
        </Link>
      </h1>

      <p>UNCNSRD is multifunctional swimwear for female figures who aren&apos;t afraid to show off their assets and want to feel unapologetically sexy.</p>
      <p>Inspired by rebellious women and street fashion, UNCNSRD strives to create innovative designs that can be multifunctional, yet still remain practical at its core.</p>

      <div className={styles.grid}>
        <Link href="/inquiry" passHref>
          <a className={styles.card}>
            <h2>Inquiry &rarr;</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </a>
        </Link>

        <Link href="/inquiry" passHref>
          <a className={styles.card}>
            <h2>Inquiry &rarr;</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </a>
        </Link>

        <Link href="/inquiry" passHref>
          <a className={styles.card}>
            <h2>Inquiry &rarr;</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </a>
        </Link>

        <Link href="/inquiry" passHref>
          <a className={styles.card}>
            <h2>Inquiry &rarr;</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
