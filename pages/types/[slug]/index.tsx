import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { ProductQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
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

  if (!data?.product) {
    console.error({ errors });
    return <Error statusCode={404} />;
  }

  if (errors) {
    console.error({ errors });
    return <Error statusCode={500} />;
  }

  const { product } = data;

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
