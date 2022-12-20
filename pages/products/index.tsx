import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { ProductsQuery } from "#/generated/gql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import { createRef } from "react";

import Breadcrumbs from "#/components/Breadcrumbs";
import Layout from "#/components/Layout";
import ProductCard from "#/components/ProductCard";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/lib/clients/shopify";

import document from "./index.graphql";

import styles from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async () => {
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
}: StorefrontApiResponseOk<ProductsQuery>) {
  const scrollingElement = createRef<HTMLDivElement>();

  if (!data || errors) {
    console.error({ errors });
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

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
      <Breadcrumbs>
        <li>
          <Link href="/" title="Return to the home page">
            Home
          </Link>
        </li>
        <li>Products</li>
      </Breadcrumbs>
      <header className={clsx(styles.header)}>
        <Image
          alt="background"
          className={clsx(styles.background)}
          fill
          src="/images/art/desktop.jpg"
        />
        <div className={clsx(styles.foreground)} />
        <h2 className={clsx(styles.title, "logotype", "mask")}>UNCNSRD</h2>
      </header>
      <section className={clsx(styles.productsList)}>
        {data.products.nodes.map((node, index) => (
          <ProductCard key={index} product={node} />
        ))}
      </section>
      {/* <aside>
        <h2>Related Products</h2>
      </aside> */}
    </Layout>
  );
}
