import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { ProductsQuery } from "#/gql/graphql";

import { clsx } from "clsx";
import Link from "next/link";
import { request } from "graphql-request";

import Breadcrumbs from "#/components/Breadcrumbs";
import Layout from "#/components/Layout";
import ProductCard from "#/components/ProductCard";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/src/shopify-client";

import document from './index.graphql';

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

    // @TODO I don't love how we do this with 'errors' and 'data'
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
  // const { storeDomain } = useShop();

  if (!data || errors) {
    console.error({ errors });
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <Layout showHeaderAndFooter={true}>
      <title>Collagerie - Home</title>
      <Breadcrumbs>
        <li>
          <Link href="/" title="Return to the home page">
            Home
          </Link>
        </li>
        <li>Products</li>
      </Breadcrumbs>
      <main className={clsx(styles.main)}>
        {data.products.nodes.map((node, index) => (
          <ProductCard key={index} product={node} />
        ))}
      </main>
      {/* <aside>
        <h2>Related Products</h2>
      </aside> */}
    </Layout>
  );
}