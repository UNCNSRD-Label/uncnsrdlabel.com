import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { HelpQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
import { SlMagnifier } from "react-icons/sl";

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
}: StorefrontApiResponseOk<HelpQuery>) {
  console.log({ data });

  if (!data?.blog) {
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
      <header className={clsx(styles.header)}>
        <h2 className={clsx(styles.title, "title")}>How can we help?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered flex-auto"
          />
          <button className="btn btn-square">
            <SlMagnifier
              aria-hidden="true"
              className={clsx("icon")}
              title="Search this site"
            />
          </button>
        </div>
      </header>
      <section>
        {data.blog.articles.nodes.map((node) => (
          <article key={node.id} className={clsx(styles.article, "prose")}>
            <h2>{node.title}</h2>
            {node.image && (
              <figure className={clsx(styles.figure)}>
                {/* <Image
                  alt="Sexy young woman eating a cookie"
                  className={clsx(styles.image, "onLoadingComplete")}
                  height={node.image.height}
                  onLoadingComplete={onLoadingComplete}
                  priority
                  src={node.image.url}
                  width={node.image.width}
                /> */}
              </figure>
            )}
          </article>
        ))}
      </section>
    </Layout>
  );
}
