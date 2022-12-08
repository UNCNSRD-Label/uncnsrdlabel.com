import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { ProductQuery } from "#/gql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import { useRouter } from "next/router";

import Layout from "#/components/Layout";
import ProductDetails from "#/components/ProductDetails";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/src/shopify-client";

import document from "./index.graphql";

import styles from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params,
    // preview = false,
  } = context;

  const slug = Array.isArray(params?.slug) ? params?.slug?.[0] : params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  try {
    const requestHeaders = getPublicTokenHeaders();
    const url = getStorefrontApiUrl();
    const variables = {
      slug,
    };

    const data = await request({
      url,
      document,
      // requestHeaders: getPrivateTokenHeaders({buyerIp}),
      requestHeaders,
      variables,
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
}: StorefrontApiResponseOk<ProductQuery>) {
  const { pathname } = useRouter();

  if (!data || errors) {
    console.error({ errors });
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  const { product } = data;

  if (!product) {
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <Layout showHeaderAndFooter={true}>
      <ProductDetails
        product={product}
        url={`${process.env.NEXT_PUBLIC_VERCEL_URL}${pathname}`}
      />
      <aside className={clsx(styles.aside)}>
        <h2>Related Products</h2>
      </aside>
    </Layout>
  );
}
