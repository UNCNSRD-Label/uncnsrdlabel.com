import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { CollectionsQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
import { createRef } from "react";
import { SlMagnifier } from "react-icons/sl";
import slugify from "slugify";

import Breadcrumbs from "#/components/Breadcrumbs";
import Layout from "#/components/Layout";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

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
}: StorefrontApiResponseOk<CollectionsQuery>) {
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
      <Breadcrumbs>
        <li>
          <Link href="/" title="Return to the home page">
            Home
          </Link>
        </li>
        <li>Types</li>
      </Breadcrumbs>
      <header className={clsx(styles.header)}>
        <div className={clsx(styles.card, "card", "glass")}>
          <div className="card-body">
            <h2 className={clsx(styles.title, "title")}>
              What are you looking for?
            </h2>
            <div className={clsx(styles.inputGroup, "input-group")}>
              <input
                type="text"
                placeholder="Search…"
                className={clsx(
                  styles.input,
                  "input",
                  "input-bordered",
                  "flex-auto"
                )}
              />
              <button className="btn btn-square">
                <SlMagnifier
                  aria-hidden="true"
                  className={clsx("icon")}
                  title="Search this site"
                />
              </button>
            </div>
          </div>
        </div>
        <figure className={clsx(styles.figure)}>
          <Image
            alt="background"
            className={clsx(styles.image)}
            fill
            src="/images/campaign/stock-photo-fancy-young-girl-on-the-beach-in-bikini-swimming-in-the-sea-dubai-surfing-surfboard-bronze-tan-1180841200.jpg"
          />
        </figure>
        <div className={clsx(styles.foreground)} />
      </header>
      <section className={clsx(styles.collectionsList)}>
        {data.collections.nodes?.map((collection, index) => (
          <Link
            className={clsx(styles.card)}
            href={`/collections/${slugify(collection.handle, {
              lower: true,
            })}`}
            key={index}
          >
            <figure
              className={clsx(styles.figure)}
              id={`productVariantMediaGallery-${index}`}
              key={index}
            >
              {collection.image?.url && (
                <div className={clsx(styles.imageContainer)}>
                  <Image
                    alt={collection.image?.altText ?? IMAGE_ALT_TEXT_FALLBACK}
                    className={clsx(styles.image)}
                    fill
                    // height={collection.image?.height ?? 0}
                    sizes={`(max-width: ${theme.screens.xs.max}) 100vw,
              25vw`}
                    src={collection.image.url}
                    // width={collection.image?.width ?? 0}
                  />
                </div>
              )}
              <figcaption className={clsx(styles.figcaption)}>
                {collection.title}
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
