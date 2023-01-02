import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { HomeQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";

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
    const variables = {

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
}: StorefrontApiResponseOk<HomeQuery>) {
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
      <div className={clsx(styles.root, "fitViewport")}>
        <figure className={clsx(styles.figure)}>
          <Link href="/campaign" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on hotel bathroom counter"
              className={clsx(
                styles.image,
                "onLoadingComplete",
                "tablet:hidden"
              )}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/art/lp1.jpg"
            />
            <Image
              alt="Sexy young woman posing in bikini on hotel bathroom counter"
              className={clsx(
                styles.image,
                "onLoadingComplete",
                "hidden",
                "tablet:block"
              )}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/art/desktop.jpg"
            />
          </Link>
        </figure>
        <Link
          href="/campaign"
          className={clsx(styles.cta, "cta", "text-sm")}
          title="View the campaign"
        >
          View the campaign
        </Link>
      </div>
    </Layout>
  );
}
