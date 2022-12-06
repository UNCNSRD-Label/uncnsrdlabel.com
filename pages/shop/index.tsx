import type { GetServerSideProps } from "next";

import type { ProductsQuery } from "#/gql/graphql";

import { clsx } from "clsx";
import { type StorefrontApiResponseOk, useShop } from "@shopify/hydrogen-react";
import Link from "next/link";
import { request } from "graphql-request";

import { graphql } from "#/gql";

import Breadcrumbs from "#/components/Breadcrumbs";
import Layout from "#/components/Layout";
import ProductCard from "#/components/ProductCard";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
  // getPrivateTokenHeaders,
} from "#/src/shopify-client";

import styles from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await request({
      url: getStorefrontApiUrl(),
      document: query,
      // @TODO: convert to 'getPrivateTokenHeaders({buyerIp})'
      requestHeaders: getPublicTokenHeaders(),
    });

    // @TODO I don't love how we do this with 'errors' and 'data'
    return { props: { data: response, errors: null } };
  } catch (err) {
    console.error(err);
    return { props: { data: null, errors: [(err as Error).toString()] } };
  }
};

export default function Page({
  data,
  errors,
}: StorefrontApiResponseOk<ProductsQuery>) {
  // const { storeDomain } = useShop();

  if (!data || errors) {
    console.error(errors);
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <Layout showHeaderAndFooter={true}>
      <title>UNCNSRD - Home</title>
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
          <ProductCard key={index} data={node} />
        ))}
      </main>
      {/* <aside>
        <h2>Related Products</h2>
      </aside> */}
    </Layout>
  );
}

const query = graphql(`
  query Products {
    shop {
      name
    }
    products(first: 8) {
      nodes {
        availableForSale
        description
        id
        title
        publishedAt
        handle
        productType
        publishedAt
        vendor
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          nodes {
            id
            image {
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
`);
