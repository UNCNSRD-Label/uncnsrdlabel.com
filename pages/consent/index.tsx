import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { ConsentQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import Image from "next/image";

import ConsentTable from "#/components/ConsentTable";
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
}: StorefrontApiResponseOk<ConsentQuery>) {
  if (!data?.shop) {
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
      showHeaderAndFooter={true}
    >
      <div className={clsx(styles.about, "prose")}>
        <h2>Consent settings</h2>
        <p>We use some essential cookies to make this service work.</p>
        <p>
          We’d also like to use analytics cookies so we can understand how you
          use the service and make improvements.
        </p>
      </div>
      <figure className={clsx(styles.figure)}>
        <Image
          alt="Sexy young woman eating a cookie"
          className={clsx(styles.image, "onLoadingComplete")}
          height={660}
          onLoadingComplete={onLoadingComplete}
          priority
          src="/images/campaign/stock-photo-heart-shaped-cookie-hold-in-front-of-sexy-female-mouth-234809632.jpg"
          width={900}
        />
      </figure>
      <ConsentTable className={clsx("col-span-full")} />
    </Layout>
  );
}
