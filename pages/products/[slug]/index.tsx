import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { ProductQuery } from "#/generated/gql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import { useRouter } from "next/router";
import { createRef } from "react";

import NextQueryParamsProvider from "#/lib/providers/next-query-params";

import Layout from "#/components/Layout";
import ProductDetails from "#/components/ProductDetails";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/lib/clients/shopify";

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
}: StorefrontApiResponseOk<ProductQuery>) {
  const { asPath, pathname } = useRouter();

  const scrollingElement = createRef<HTMLDivElement>();

  if (!data || errors) {
    console.error({ errors });
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  const { product } = data;

  if (!product) {
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <NextQueryParamsProvider>
      <Layout
        classNameDrawerContent={clsx(
          styles.drawerContent,
          "drawerContentOverflowY"
        )}
        ref={scrollingElement}
        showHeaderAndFooter={true}
      >
        <ProductDetails
          path={asPath}
          product={product}
          scrollingElement={scrollingElement}
        />
        <aside className={clsx(styles.aside)}>
          <h2>Related Products</h2>
        </aside>
      </Layout>
    </NextQueryParamsProvider>
  );
}
