import { clsx } from "clsx";
import { createRef } from "react";

import Layout from "#/components/Layout";

import styles from "./index.module.css";

export default function Page() {
  const scrollingElement = createRef<HTMLDivElement>();

  return (
    <Layout
      classNameDrawerContent={clsx(
        styles.drawerContent,
        "drawerContentOverflowY"
      )}
      classNameMain={clsx(styles.main)}
      ref={scrollingElement}
      showHeaderAndFooter={true}
    >
      <article className={clsx(styles.article)}>
        <h2 className={clsx(styles.title, "logotypeMask")}>UNCNSRD</h2>
        <div className={clsx(styles.text)}>
          <p>
            <span className={clsx("fontBomberEscort_")}>UNCNSRD</span> is
            multifunctional swimwear for female figures who aren&apos;t afraid
            to show off their assets and want to feel unapologetically sexy.
          </p>
          <p>
            Inspired by rebellious women and street fashion,{" "}
            <span className={clsx("fontBomberEscort_")}>UNCNSRD</span> strives
            to create innovative designs that can be multifunctional, yet still
            remain practical at its core.
          </p>
        </div>
      </article>
    </Layout>
  );
}
