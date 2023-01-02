import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { CampaignProductsQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
import { createRef } from "react";

import Layout from "#/components/Layout";

import { onLoadingComplete } from "#/lib/util/image";

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
}: StorefrontApiResponseOk<CampaignProductsQuery>) {
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
      <section className={clsx(styles.sectionGallery, styles.wall)}>
        <figure className={clsx(styles.figure, "aspect-3/2", "object-bottom")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0891.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/96bc96865cea6d136d6dbbf8d09b9730.jpeg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0893.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/58e0ffc2dca3b361d84c71464b2b6f5b.jpeg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0895.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3", "object-bottom")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/af7202e279878df1d69835240b7e07ff.jpeg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/13c5cd4bb3dbc00133bc9d102da311b2.jpeg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0893.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/00ac105dafcf97a0b07e11471bd282f4.jpeg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0895.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-3/2", "object-bottom")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0891.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/865ad58b6535789e5994807d96fdef16.jpeg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0893.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/607b927cdb07fe97ced25f95a1bec42f.jpeg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0895.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-3/2", "object-bottom")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/d9c6149cba1b7bb064247b9b05772475.jpeg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/09895c2610d8cac0692bdd33b51db002.jpeg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0893.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/model/IMG_0894.jpg"
            />
          </Link>
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on a white couch"
              className={clsx(styles.image, "onLoadingComplete")}
              fill
              onLoadingComplete={onLoadingComplete}
              priority
              src="/images/campaign/a49b298d3d3a40128d2dd8d67ae07cc5.jpeg"
            />
          </Link>
        </figure>
      </section>
      <footer className={clsx(styles.footer)}>
        <Link
          href="/products"
          className={clsx(styles.cta, "cta")}
          title="Shop now"
        >
          Shop now
        </Link>
      </footer>
    </Layout>
  );
}
