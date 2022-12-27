import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

import Layout from "#/components/Layout";

import { onLoadingComplete } from "#/lib/util/image";

import styles from "./index.module.css";

export default function Page() {
  return (
    <Layout
      classNameDrawerContent={clsx(
        styles.drawerContent,
        "drawerContentOverflowY"
      )}
      classNameMain={clsx(styles.main)}
      showHeaderAndFooter={false}
    >
      <div className={clsx(styles.root, "fitViewport")}>
        <Link
          href="/"
          className={clsx(styles.logotypeLink)}
          title="uncnsrdlabel.com"
        >
          <Image
            alt="UNCNSRD logo"
            className={clsx(styles.logotype, "logotype")}
            fill
            priority
            src="/images/logos/logotype.svg"
          />
        </Link>
        <figure className={clsx(styles.figure)}>
          <Link
            href="/collection"
            className={clsx(styles.link)}
            title="Shop now"
          >
            <Image
              alt="Sexy young woman posing in bikini on hotel bathroom counter"
              className={clsx(
                styles.image,
                "onLoadingComplete",
                "tablet:hidden"
              )}
              fill
              priority
              src="/images/art/lp1.jpg"
            />
            <Image
              alt="Sexy young woman posing in bikini on hotel bathroom counter"
              className={clsx(
                styles.image,
                "onLoadingComplete",
                "hidden",
                "tablet:block"
              )}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/art/desktop.jpg"
            />
          </Link>
        </figure>
        <Link
          href="/collection"
          className={clsx(styles.cta, "cta")}
          title="View the collection"
        >
          View the collection
        </Link>
      </div>
    </Layout>
  );
}
