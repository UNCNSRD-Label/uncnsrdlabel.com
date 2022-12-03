import type { ProductVariant } from "@shopify/hydrogen-react/storefront-api-types";
import type { GetServerSideProps } from "next";

import type { ProductQuery } from "#/gql/graphql";

import { clsx } from "clsx";
import {
  AddToCartButton,
  Image as ShopifyImage,
  // Money,
  ProductPrice,
  ProductProvider,
  type StorefrontApiResponseOk,
  useShop,
  // ModelViewer,
} from "@shopify/hydrogen-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { request } from "graphql-request";
import { Suspense } from "react";

import { graphql } from "#/gql";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import { Stage } from "@react-three/drei";

import FemaleSportswear2 from "#/components/canvas/FemaleSportswear2";
import Scene from "#/components/canvas/Scene";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
  // getPrivateTokenHeaders,
} from "#/src/shopify-client";

import styles from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    // locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!,
    // locales,
    params,
    // preview = false,
  } = context;

  const slug = Array.isArray(params?.slug) ? params?.slug?.[0] : params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  try {
    const response = await request({
      url: getStorefrontApiUrl(),
      document: query,
      // @TODO: convert to 'getPrivateTokenHeaders({buyerIp})'
      requestHeaders: getPublicTokenHeaders(),
      variables: {
        slug,
      },
    });

    // @TODO I don't love how we do this with 'errors' and 'data'
    return { props: { data: response, errors: null } };
  } catch (err) {
    console.error(err);
    return { props: { data: null, errors: [(err as Error).toString()] } };
  }
};

export default function Page({
  data,
  errors,
}: StorefrontApiResponseOk<ProductQuery>) {
  const { defaultLocale, locale, locales, pathname } = useRouter();

  const { storeDomain } = useShop();

  if (!data || errors) {
    console.error(errors);
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  const { product } = data;

  if (!product) {
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  // @TODO: Use useEffect to set the current variant dynamically via UI input
  // const images = variants.nodes?.[0].image;

  const url = `${process.env.NEXT_PUBLIC_VERCEL_URL}${pathname}`;

  const getAvailability = (
    variant: Pick<
      ProductVariant,
      "availableForSale" | "currentlyNotInStock" | "quantityAvailable"
    >
  ) => {
    let availability = "PreOrder";

    if (variant.currentlyNotInStock) {
      availability = "OutOfStock";
    }

    if (variant.quantityAvailable) {
      availability = "LimitedAvailability";
    }

    if (variant.availableForSale) {
      availability = "InStock";
    }

    return `https://schema.org/${availability}`;
  };

  return (
    <ProductProvider data={product}>
      <Script
        type="application/ld+json"
        id={product.handle}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            identifier: product.id,
            datePublished: product.publishedAt,
            name: product.title,
            description: product.description,
            image: product.images?.nodes?.[0]?.url,
            brand: product.vendor,
            url,
            offers: {
              "@type": "AggregateOffer",
              // lowPrice: new Intl.NumberFormat(locale, {
              //   style: "currency",
              //   currency: product.priceRange.minVariantPrice.currencyCode,
              // }).format(
              //   Number.parseInt(product.priceRange.minVariantPrice.amount, 10)
              // ),
              // highPrice: new Intl.NumberFormat(locale, {
              //   style: "currency",
              //   currency: product.priceRange.maxVariantPrice.currencyCode,
              // }).format(
              //   Number.parseInt(product.priceRange.maxVariantPrice.amount, 10)
              // ),
              offerCount: 1,
              offers: [
                product.variants.nodes.map((variant, index) => ({
                  "@type": "Offer",
                  url,
                  title: variant.title,
                  priceCurrency: variant.price.currencyCode,
                  price: variant.price.amount,
                  availability: getAvailability(variant),
                  itemCondition: "https://schema.org/NewCondition",
                })),
              ],
            },
          }),
        }}
      />
      <title>{`${product.seo.title} &ndash; UNCNSRD`}</title>
      <meta name="description" content={product.seo.description!} />

      {/* <link rel="canonical" href={url} /> */}
      {/* <link rel="alternate" hrefLang="x-default" href={`${process.env.NEXT_PUBLIC_VERCEL_URL}${defaultLocale}${pathname}`} /> */}
      {/* {locales?.map((locale) => (
        <link
          key={`hrefLang=${locale}`}
          rel="alternate"
          hrefLang={locale}
          href={`${process.env.NEXT_PUBLIC_VERCEL_URL}${locale}${pathname}`}
        />
      ))} */}
      {/* <link rel="alternate" type="application/json+oembed" href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/oembed${pathname}`} /> */}

      <meta property="og:url" content={url} />
      <meta property="og:title" content={product.seo.title!} />
      <meta property="og:type" content="product" />
      <meta property="og:description" content={product.seo.description!} />
      <meta property="og:image" content={product.images?.nodes?.[0]?.url} />
      <meta
        property="og:image:secure_url"
        content={product.images?.nodes?.[0]?.url}
      />
      <meta property="og:image:width" content="1400" />
      <meta property="og:image:height" content="2625" />
      <meta
        property="og:price:amount"
        content={product.priceRange.minVariantPrice.amount}
      />
      <meta
        property="og:price:currency"
        content={product.priceRange.minVariantPrice.currencyCode}
      />

      <meta name="twitter:site" content="@UNCNSRD" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={product.seo.title!} />
      <meta name="twitter:description" content={product.seo.description!} />

      <header className={clsx(styles.header)}>
        <h1 className={clsx(styles.heading)}>UNCNSRD</h1>
      </header>
      <article className={clsx(styles.article)}>
        <section className={clsx(styles.gallery)}>
          {product.images.nodes.map((image, index) => (
            <figure key={index} className={clsx(styles.figure)}>
              <Image
                alt={image.altText ?? IMAGE_ALT_TEXT_FALLBACK}
                className={clsx(styles.image)}
                fill
                priority
                sizes={`(max-inline-size: ${theme.screens.xs.max}) 100vw,
                      25vw`}
                src={image.url}
                title={product.title ?? IMAGE_TITLE_FALLBACK}
              />
              <figcaption className={clsx(styles.figcaption)}>
                Featured image for {product.title}
              </figcaption>
            </figure>
          ))}
          <figure className={clsx(styles.figure, styles.model)}>
            <Suspense>
              <Scene>
                <Stage
                  adjustCamera={0.5}
                  // environment="dawn"
                  environment="warehouse"
                  intensity={0.5}
                  preset="portrait"
                  shadows="contact"
                >
                  <FemaleSportswear2
                    castShadow
                    receiveShadow
                    position={[0, 0, 0]}
                    rotation={[0, Math.PI / 1, 0]}
                  />
                </Stage>
              </Scene>
            </Suspense>
            <figcaption className={clsx(styles.figcaption)}>
              Featured image for {product.title}
            </figcaption>
          </figure>
        </section>
        <div className={clsx(styles.stickyContainer)}>
          <section className={clsx(styles.details)}>
            <header className={clsx(styles.header)}>
              <Link
                href="/experience"
                className={styles.backLink}
                title="Return to the experience page"
              >
                Return to the experience page
              </Link>
              <h1 className={clsx(styles.heading)}>{product.title}</h1>
            </header>
            <div>
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
              Lorem
              <br />
            </div>
            <ProductPrice data={product} />
            <AddToCartButton>Add To Bag</AddToCartButton>
            <footer></footer>
          </section>
        </div>
      </article>
      <aside className={clsx(styles.aside)}>
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
        Ipsum
        <br />
      </aside>
    </ProductProvider>
  );
}

const query = graphql(`
  query Product($slug: String!) {
    product(handle: $slug) {
      id
      handle
      availableForSale
      title
      productType
      publishedAt
      vendor
      description
      descriptionHtml
      seo {
        title
        description
      }
      options {
        id
        name
        values
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 32) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          barcode
          id
          title
          sku
          availableForSale
          currentlyNotInStock
          quantityAvailable
          requiresShipping
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
          title
        }
      }
      images(first: 32) {
        nodes {
          altText
          height
          url
          width
        }
      }
      # media {
      #   nodes {
      #     alt
      #     mediaContentType
      #     preview {
      #       status
      #       image {
      #         altText
      #         height
      #         url
      #         width
      #       }
      #     }
      #     status
      #   }
      # }
      # externalUrl: metafield(namespace: "custom_fields", key: "url") {
      #   value
      # }
      # styleTrick: metafield(namespace: "custom_fields", key: "style_trick") {
      #   value
      # }
      # styleTrickAuthor: metafield(
      #   namespace: "custom_fields"
      #   key: "style_trick_author"
      # ) {
      #   value
      # }
    }
  }
`);
