import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { AccountQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import { createRef } from "react";

import AccountCreateForm from "#/components/AccountCreateForm";
import AccountSignInForm from "#/components/AccountSignInForm";
import Layout from "#/components/Layout";

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
}: StorefrontApiResponseOk<AccountQuery>) {
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
      <AccountCreateForm />
      <AccountSignInForm />
    </Layout>
  );
}
