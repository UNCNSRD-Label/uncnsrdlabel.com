import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { ShopQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { createRef } from "react";
// import Flag from "react-world-flags";

import Layout from "#/components/Layout";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/lib/clients/shopify";

import { onLoadingComplete } from "#/lib/util/image";

import document from "./index.graphql";

import styles from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params,
    // preview = false,
  } = context;

  try {
    const requestHeaders = getPublicTokenHeaders();
    const url = getStorefrontApiUrl();

    const data = await request({
      url,
      document,
      // requestHeaders: getPrivateTokenHeaders({buyerIp}),
      requestHeaders,
    });

    // TODO I don't love how we do this with 'errors' and 'data'
    return { props: { data, errors: null } };
  } catch (err) {
    console.error({ err });
    return { props: { data: null, errors: [(err as Error).toString()] } };
  }
};

export default function Page({
  data,
  errors,
}: StorefrontApiResponseOk<ShopQuery>) {
  // const { asPath, pathname } = useRouter();

  // const scrollingElement = createRef<HTMLDivElement>();
  // console.log({ data });

  if (!data?.shop) {
    console.error({ errors });
    return <Error statusCode={404} />;
  }

  if (errors) {
    console.error({ errors });
    return <Error statusCode={500} />;
  }

  const { shop } = data;

  console.log({ shop });

  return (
    <Layout
      classNameDrawerContent={clsx(
        styles.drawerContent,
        "drawerContentOverflowY"
      )}
      classNameMain={clsx(styles.main)}
      data={data}
      showHeaderAndFooter={true}
    >
      <figure className={clsx(styles.figure)}>
        <Link href="/campaign" className={clsx(styles.link)} title="Shop now">
          <Image
            alt="Sexy young woman posing in bikini on hotel bathroom counter"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/campaign/865ad58b6535789e5994807d96fdef16.jpeg"
          />
        </Link>
      </figure>
      <article className={clsx(styles.article, "prose")}>
        <h2 className={clsx(styles.title, "logotype")}>UNCNSRD</h2>
        <p>
          <span className={clsx("fontBomberEscort_")}>UNCNSRD</span> is
          multifunctional swimwear for female figures who aren&apos;t afraid to
          show off their assets and want to feel unapologetically sexy.
        </p>
        <p>
          Inspired by rebellious women and street fashion,{" "}
          <span className={clsx("fontBomberEscort_")}>UNCNSRD</span> strives to
          create innovative designs that can be multifunctional, yet still
          remain practical at its core.
        </p>
        {/* <section className={clsx(styles.section)}>
          <h2>Countries we ship to</h2>
          <div className={clsx(styles.countries)}>
          {shop.shipsToCountries.map((code) => (
            <Flag key={code} code={code} />
          ))}
          </div>
        </section> */}
      </article>
    </Layout>
  );
}
