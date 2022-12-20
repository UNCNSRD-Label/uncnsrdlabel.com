import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { HomeProductsQuery } from "#/gql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import { createRef } from "react";

import Layout from "#/components/Layout";
import ProductCard from "#/components/ProductCard";

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

      <section className={clsx(styles.sectionModel)}>
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
          src="/images/model/IMG_0891.JPG"
        />
      </section>

      {/* <Image
        alt="Sexy young woman posing in bikini on hotel bathroom counter"
        className={clsx(styles.logotypeMask, "onLoadingComplete")}
        height="200"
        onLoadingComplete={onLoadingComplete}
        src="/images/art/desktop.jpg"
        width="900"
      /> */}

      <section className={clsx(styles.sectionTitle)}>
        <h2 className={clsx(styles.title, "logotypeMask")}>UNCNSRD</h2>
      </section>

      <section className={clsx(styles.sectionWall)} id="wall">
        {data.products.nodes.map((node, index) => (
          <ProductCard
            className={clsx("image-full", styles.productCard)}
            key={index}
            product={node}
          />
        ))}
      </section>

      <section className={clsx(styles.parallax)}>
        <header className={clsx(styles.header)}>
          <Image
            alt="background"
            fill
            // src="https://cdn.imgpaste.net/2022/10/10/Kem93m.png"
            src="/images/art/desktop.jpg"
            className={clsx(styles.background)}
          />
          <Image
            alt="foreground"
            fill
            src="https://cdn.imgpaste.net/2022/10/10/KemO9N.png"
            className={clsx(styles.foreground)}
          />
          {/* <div className={clsx(styles.title)}> */}
          <h2 className={clsx(styles.title, "logotypeMask")}>UNCNSRD</h2>
          {/* </div> */}
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

        {/* <section className={clsx(styles.sectionText)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis
          unde illo neque at hic quisquam, nulla consectetur, itaque maxime sit
          iusto aliquam culpa reiciendis eaque recusandae vitae modi, animi
          expedita perferendis inventore. Culpa incidunt odit dicta quibusdam
          ullam facilis eum magnam, consectetur voluptates praesentium, pariatur
          eos nihil! Natus in, autem aut facere repellat eveniet commodi illo
          ullam hic fugit deserunt explicabo esse atque reprehenderit optio,
          dicta suscipit sed! Porro fugiat numquam vel magni, iure provident
          consequuntur velit ut quia itaque repudiandae molestiae, nobis sequi
          incidunt autem! Cum impedit accusamus laboriosam eaque necessitatibus
          consectetur incidunt a exercitationem molestias doloribus tenetur
          amet, ullam at repudiandae, quos reprehenderit adipisci assumenda
          dolor enim voluptas natus! Assumenda praesentium voluptate culpa
          quidem quasi impedit unde incidunt odit velit, dolore officiis
          distinctio, fugit, optio sed. Quos nesciunt eius reprehenderit ipsa
          consectetur tempora, fugiat provident corporis perspiciatis veritatis
          totam temporibus voluptates soluta vitae mollitia molestias reiciendis
          expedita doloribus est. Maxime et fugit expedita id sed cumque harum
          dignissimos aperiam voluptatum quos obcaecati illo tempore
          consectetur, sunt perferendis eius aliquid soluta praesentium
          voluptatem assumenda ex fuga. Iusto, possimus? Dolores deleniti eaque,
          aperiam consequuntur odit culpa, architecto, quas veniam provident
          inventore eius. Laboriosam in reprehenderit quidem? Officiis illum
          molestiae, praesentium velit, illo debitis quasi fuga laborum
          veritatis necessitatibus fugiat cupiditate! Quia animi provident
          maxime numquam porro itaque! Provident, rerum. Aliquid cum quo ducimus
          ad? Repellat nihil, saepe beatae rerum sint eveniet voluptate officiis
          velit autem officia tempore deserunt sequi quod quae culpa sed.
          Reprehenderit eveniet ipsum nihil ipsam quam facilis, possimus modi
          placeat ratione soluta voluptate obcaecati error minima enim, fugiat
          quaerat architecto, iure dignissimos a eum quidem eos at fuga.
          Consectetur, quisquam at reprehenderit in exercitationem inventore
          incidunt dolorum quos adipisci labore? Fugiat facilis ipsum minus,
          officiis eos modi sequi distinctio pariatur reprehenderit accusantium
          labore obcaecati, recusandae saepe?
        </section> */}
      </section>
    </Layout>
  );
}
