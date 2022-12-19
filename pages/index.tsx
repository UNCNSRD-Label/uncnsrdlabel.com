import type { GetServerSideProps } from "next";

import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { createRef } from "react";

import Layout from "#/components/Layout";

import styles from "./index.module.css";

export default function Page() {
  const scrollingElement = createRef<HTMLDivElement>();

  return (
    <Layout
      classNameMain={clsx(styles.main, "fitViewport")}
      ref={scrollingElement}
      showHeaderAndFooter={false}
    >
      <Link href="/" className={clsx(styles.logotype)} title="uncnsrdlabel.com">
        <Image
          alt="UNCNSRD logo"
          fill
          priority
          src="/images/logos/logotype.svg"
        />
      </Link>
      <figure className={clsx(styles.figure)}>
        <Link href="/experience" className={clsx(styles.cta)} title="Shop now">
          <Image
            alt="Sexy young woman posing in bikini on hotel bathroom counter"
            className={clsx(styles.image, "tablet:hidden")}
            fill
            priority
            src="/images/art/lp1.jpg"
            // src="/tmp/10.jpg"
          />
          <Image
            alt="Sexy young woman posing in bikini on hotel bathroom counter"
            className={clsx(styles.image, "hidden", "tablet:block")}
            fill
            priority
            src="/images/art/desktop.jpg"
            // src="/tmp/10.jpg"
          />
        </Link>
      </figure>
      <Link href="/experience" className={clsx(styles.cta)} title="Shop now">
        Shop now
      </Link>
    </Layout>
  );
}
