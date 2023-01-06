import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { QueryRoot } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import Link from "next/link";
import { NextSeo } from "next-seo";
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params,
    // preview = false,
  } = context;

  const slug = Array.isArray(params?.slug) ? params?.slug?.[0] : params?.slug;

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
}: StorefrontApiResponseOk<QueryRoot>) {
  const scrollingElement = createRef<HTMLDivElement>();

  if (!data) {
    console.error({ errors });
    return <Error statusCode={404} />;
  }

  if (errors) {
    console.error({ errors });
    return <Error statusCode={500} />;
  }

  return (
    <Layout
      classNameDrawerContent={clsx(
        styles.drawerContent,
        "drawerContentOverflowY"
      )}
      classNameMain={clsx(styles.main)}
      data={data}
      ref={scrollingElement}
      showHeaderAndFooter={true}
    >
      {data.collection && data.shop && (
        <NextSeo
          {...(data.collection.title && {
            title: `${data.collection.title} - ${data.shop?.name}`,
          })}
          {...(data.collection.seo?.title && {
            title: `${data.collection.seo?.title} - ${data.shop?.name}`,
          })}
          {...(data.collection.description && {
            description: data.collection.description,
          })}
          {...(data.collection.seo?.description && {
            description: data.collection.seo?.description,
          })}
        />
      )}
      <Breadcrumbs>
        <li>
          <Link href="/" title="Return to the home page">
            Home
          </Link>
        </li>
        <li>Products</li>
      </Breadcrumbs>
      <header className={clsx(styles.header)}>
        {data.collection?.title && (
          <h2 className={clsx(styles.title, "title")}>
            {data.collection.title}
          </h2>
        )}
        {data.collection?.descriptionHtml && (
          <div
            dangerouslySetInnerHTML={{
              __html: data.collection.descriptionHtml,
            }}
          />
        )}
      </header>
      <section className={clsx(styles.productsList)}>
        {data.collection?.products.nodes.map((node, index) => (
          <ProductCard
            className={clsx(styles.productCard)}
            key={index}
            product={node}
          />
        ))}
      </section>
    </Layout>
  );
}
