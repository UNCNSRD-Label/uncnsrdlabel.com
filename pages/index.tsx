import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { HomeProductsQuery } from "#/gql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import { createRef } from "react";

import Layout from "#/components/Layout";

import { onLoadingComplete } from "#/lib/util/image";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/src/shopify-client";

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
}: StorefrontApiResponseOk<HomeProductsQuery>) {
  const scrollingElement = createRef<HTMLDivElement>();

  if (!data || errors) {
    console.error({ errors });
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <Layout
      classNameDrawerContent={clsx(
        styles.drawerContent,
        "drawerContentOverflowY"
      )}
      classNameMain={clsx(styles.main)}
      ref={scrollingElement}
      showHeaderAndFooter={false}
    >
      <header className={clsx(styles.header, "fitViewport")}>
        <Link
          href="/"
          className={clsx(styles.logotypeLink)}
          title="uncnsrdlabel.com"
        >
          <Image
            alt="UNCNSRD logo"
            className={clsx(styles.logotype, "logotype")}
            fill
            priority
            src="/images/logos/logotype.svg"
          />
        </Link>
        <figure className={clsx(styles.figure)}>
          <Link href="/products" className={clsx(styles.link)} title="Shop now">
            <Image
              alt="Sexy young woman posing in bikini on hotel bathroom counter"
              className={clsx(
                styles.image,
                "onLoadingComplete",
                "tablet:hidden"
              )}
              fill
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
            {/* <figcaption className={clsx(styles.figcaption, "logotype", "mask")}>UNCNSRD</figcaption> */}
          </Link>
        </figure>
        <Link
          href="/products"
          className={clsx(styles.cta, "cta")}
          title="Shop now"
        >
          Shop now
        </Link>
      </header>

      <section className={clsx(styles.sectionGallery)}>
        <figure className={clsx(styles.figure, "aspect-3/2", "object-bottom")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0891.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0892.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0893.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0894.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0895.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-3/2", "object-bottom")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0891.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0892.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0893.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0894.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0895.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-3/2", "object-bottom")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0891.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0892.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0893.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0894.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0895.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-3/2", "object-bottom")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0891.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-square")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0892.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0893.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0894.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-2/3")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0895.jpg"
          />
        </figure>
        <figure className={clsx(styles.figure, "aspect-3/2", "object-bottom")}>
          <Image
            alt="Sexy young woman posing in bikini on a white couch"
            className={clsx(styles.image, "onLoadingComplete")}
            fill
            onLoadingComplete={onLoadingComplete}
            priority
            src="/images/model/IMG_0891.jpg"
          />
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
