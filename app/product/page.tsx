import type { Product } from "@shopify/hydrogen-react/storefront-api-types";

import { clsx } from "clsx";
// import Image from "next/image";
import Link from "next/link";
// import {
//   AddToCartButton,
//   Image,
//   Money,
//   ProductPrice,
// } from "@shopify/hydrogen-react";
import { request } from "graphql-request";

import { graphql } from "#/gql";

// import {
//   getStorefrontApiUrl,
//   getPublicTokenHeaders,
//   // getPrivateTokenHeaders,
// } from "#/src/shopify-client";

import styles from "./page.module.css";

async function getData() {
  try {
    const response = await request({
      url: getStorefrontApiUrl(),
      document: query,
      // @TODO: convert to 'getPrivateTokenHeaders({buyerIp})'
      requestHeaders: getPublicTokenHeaders(),
      // requestHeaders: getPrivateTokenHeaders(),
    });

    // @TODO I don't love how we do this with 'errors' and 'data'
    return { data: response, errors: null };
  } catch (err) {
    console.error(err);
    return { data: null, errors: [(err as Error).toString()] };
  }

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // return json;
}

export default function Page() {
  // const product: Product = {};
  return (
    <>
      <title>UNCNSRD - Home</title>
      <article className={clsx(styles.container, "viewportHeight")}>
        <Link
          href="/"
          passHref
          className={styles.logotype}
          title="uncnsrdlabel.com"
        ></Link>

        {/* <h1 className={styles.title}>UNCNSRD</h1> */}

        <section className={styles.copy}>
          <h1 className={styles.title}>UNCNSRD</h1>
          {/* <AddToCartButton>Add To Cart</AddToCartButton> */}
        </section>
      </article>
    </>
  );
}

const query = graphql(`
  query IndexQuery {
    shop {
      name
    }
    products(first: 1) {
      nodes {
        # if you uncomment 'blah', it should have a GraphQL validation error in your IDE if you have a GraphQL plugin. It should also give an error during 'npm run dev'
        # blah
        id
        title
        publishedAt
        handle
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
