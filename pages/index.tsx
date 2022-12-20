import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { HomeProductsQuery } from "#/gql/graphql";

import { Canvas } from "@react-three/fiber";
import { clsx } from "clsx";
import { request } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import { createRef } from "react";

import Layout from "#/components/Layout";
import ProductCard from "#/components/ProductCard";

import LogoGlitching from "#/components/canvas/scenes/LogoGlitching";

// import { useImageLoadCallback } from "#/lib/hooks/useImageLoadCallback";
import { onLoadingComplete } from "#/lib/util/image";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/src/shopify-client";

import styles from "./index.module.css";

import document from "./index.graphql";

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
      classNameMain={clsx(styles.main, "fitViewport")}
      ref={scrollingElement}
      showHeaderAndFooter={false}
    >
      <header className={clsx(styles.headerLanding, "fitViewport")}>
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
          <Link href="#wall" className={clsx(styles.link)} title="Shop now">
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
              // src="/tmp/10.jpg"
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
              // src="/tmp/10.jpg"
              // {...useImageLoadCallback()}
            />
            {/* <figcaption className={clsx(styles.figcaption, "logotypeMask")}>UNCNSRD</figcaption> */}
          </Link>
        </figure>
        <Link href="#wall" className={clsx(styles.cta)} title="Shop now">
          Shop now
        </Link>
      </header>

      <section className={clsx(styles.sectionTitle)}>
        <h2 className={clsx(styles.title, "logotypeMask")}>UNCNSRD</h2>
        <article className={clsx(styles.article)}>
          <p>
            UNCNSRD is multifunctional swimwear for female figures who
            aren&apos;t afraid to show off their assets and want to feel
            unapologetically sexy.
          </p>
          <p>
            Inspired by rebellious women and street fashion, UNCNSRD strives to
            create innovative designs that can be multifunctional, yet still
            remain practical at its core.
          </p>
        </article>
      </section>

      <section className={clsx(styles.sectionModel)}>
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

      {/* <Image
        alt="Sexy young woman posing in bikini on hotel bathroom counter"
        className={clsx(styles.logotypeMask, "onLoadingComplete")}
        height="200"
        onLoadingComplete={onLoadingComplete}
        src="/images/art/desktop.jpg"
        width="900"
      /> */}

      <section className={clsx(styles.parallax)}>
        <header className={clsx(styles.header)}>
          <Image
            alt="background"
            className={clsx(styles.background)}
            fill
            src="/images/art/desktop.jpg"
          />
          <div className={clsx(styles.foreground)} />
          <h2 className={clsx(styles.title, "logotypeMask")}>UNCNSRD</h2>
        </header>

        <section className={clsx(styles.sectionWall)} id="wall">
          {data.products.nodes.map((node, index) => (
            <ProductCard
              className={clsx("image-full", styles.productCard)}
              key={index}
              product={node}
            />
          ))}
        </section>
      </section>

      <section className={clsx(styles.sectionTitle)}>
        <Canvas
          className={styles.canvas}
          // frameloop="demand"
          resize={{ scroll: false }}
          eventPrefix="client"
          shadows
          dpr={[1, 2]}
          camera={{
            position: [0, 0, 1],
            // fov: 35,
            near: 0.01,
            far: 100_000,
          }}
        >
          <LogoGlitching />
        </Canvas>
      </section>
    </Layout>
  );
}
