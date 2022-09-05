import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";

import styles from "./index.module.css";

import Layout from "@components/layout";

type Props = {
  children?: React.ReactNode;
};

export default function Home() {
  return (
    <Layout showHeaderAndFooter={false}>
      <Head>
        <title>UNCNSRD - Home</title>
      </Head>

      <div className={styles.container}>
        {/* <Link href="https://www.uncnsrdswim.com" passHref>
          <a className={styles.logotype} title="uncnsrdswim.com">
            <Image
              alt="UNCNSRD logo"
              fill
              sizes="25vw, 50vw"
              src="/images/logos/logotype-with-shadow.svg"
            />
          </a>
        </Link> */}

        <h1 className={styles.title}>uncnsrd</h1>

        <form className={styles.form}>
            <input type="email" id="email" name="email" placeholder="Enter your email for first access" />
            <button className="button__filled">Notify Me</button>
        </form>

        <section className={styles.copy}>
          <h1 className={styles.title}>UNCNSRD</h1>
          <p>
            UNCNSRD is multifunctional swimwear for female figures who
            aren&apos;t afraid to show off their assets and want to feel
            unapologetically sexy.
          </p>
          <p>
            Inspired by rebellious women and street fashion, UNCNSRD strives to
            create innovative designs that can be multifunctional, yet still
            remain practical at its core.
          </p>
        </section>
      </div>
    </Layout>
  );
}
