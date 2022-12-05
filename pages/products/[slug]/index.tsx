import type { ProductVariant } from "@shopify/hydrogen-react/storefront-api-types";
import type { GetServerSideProps } from "next";
import { RiHeartAddLine } from "react-icons/ri";

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
import {
  Link as ReactScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { graphql } from "#/gql";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import { Stage } from "@react-three/drei";

import FemaleSportswear2 from "#/components/canvas/FemaleSportswear2";
import Scene from "#/components/canvas/Scene";
import { Layout } from "#/components/Layout";

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
      <Layout showHeaderAndFooter={true}>
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
        <title>{product.seo.title || "UNCNSRD"}</title>
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

        <article className={clsx(styles.article)}>
          <section
            className={clsx(styles.gallery, styles.galleryFeatured)}
            id="galleryFeatured"
          >
            {/* @TODO: Add WAI-ARI */}
            <menu className={clsx(styles.steps, "steps", "steps-vertical")}>
              {product.images.nodes.slice(0, 2).map((image, index) => (
                <ReactScrollLink
                  key={index}
                  to={`galleryFeatured-${index}`}
                  containerId="galleryFeatured"
                  className="step"
                  spy={true}
                  smooth={false}
                >
                  <span className={clsx("sr-only")}>
                    Scroll to item {index}
                  </span>
                </ReactScrollLink>
              ))}
              <ReactScrollLink
                to={`galleryFeatured-3`}
                containerId="galleryFeatured"
                className="step"
                spy={true}
                smooth={false}
              >
                <span className={clsx("sr-only")}>Scroll to item 3</span>
              </ReactScrollLink>
            </menu>
            {product.images.nodes.slice(0, 2).map((image, index) => (
              <Element key={index} name={`galleryFeatured-${index}`}>
                <figure className={clsx(styles.figure)}>
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
              </Element>
            ))}
            <Element name={`galleryFeatured-3`}>
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
                        rotation={[0, Math.PI / 4, 0]}
                      />
                    </Stage>
                  </Scene>
                </Suspense>
                <figcaption className={clsx(styles.figcaption)}>
                  3D model view for {product.title}
                </figcaption>
              </figure>
            </Element>
          </section>
          <div className={clsx(styles.stickyContainer)}>
            <section className={clsx(styles.details)}>
              {/* <Link
              href="/experience"
              className={styles.backLink}
              title="Return to the experience page"
            >
              Return to the experience page
            </Link> */}
              <header className={clsx(styles.header, "prose", "prose-xs")}>
                <Link
                  href="/bikinis/tops"
                  className={styles.categoryLink}
                  title="Go to category page"
                >
                  Bikini Tops
                </Link>
                <h1 className={clsx(styles.heading)}>{product.title}</h1>
                <ProductPrice className={clsx(styles.price)} data={product} />
              </header>
              <section
                className={clsx(
                  styles.section,
                  "not-prose",
                  "dropdown",
                  "dropdown-top",
                  "dropdown-hover"
                )}
              >
                <select className="select select-ghost w-full">
                  <option disabled selected>
                    Select size
                  </option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </section>
              <section className={clsx(styles.section, styles.sectionActions)}>
                <AddToCartButton
                  className={clsx("btn", "btn-primary", "lg:btn-wide")}
                >
                  Add to bag
                </AddToCartButton>
                <button
                  className={clsx("btn", "btn-circle", "btn-outline", "gap-2")}
                >
                  <RiHeartAddLine
                    aria-hidden="true"
                    className={clsx("icon")}
                    title="Add to wishlist"
                  />
                  <span className={clsx("sr-only")}>Add to wishlist</span>
                </button>
              </section>
              <section
                className={clsx(styles.section, styles.sectionDescription)}
              >
                <div
                  className={clsx("prose", "prose-xs")}
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              </section>
              <section
                className={clsx(
                  styles.section,
                  styles.sectionSizing,
                  "collapse",
                  "collapse-plus"
                )}
                tabIndex={0}
              >
                <div className="collapse-title text-base">Sizing</div>
                <div className="collapse-content">
                  <p>Womenswear style with a slim fit.</p>
                </div>
              </section>
              <section
                className={clsx(
                  styles.section,
                  styles.sectionComposition,
                  "collapse",
                  "collapse-plus"
                )}
                tabIndex={0}
              >
                <div className="collapse-title text-base">Composition</div>
                <div className="collapse-content">
                  <p>72% Rayon / 28% Polybutylene</p>
                </div>
              </section>
              <section
                className={clsx(
                  styles.section,
                  styles.sectionShipping,
                  "collapse",
                  "collapse-plus"
                )}
                tabIndex={0}
              >
                <div className="collapse-title text-base">Shipping</div>
                <div className="collapse-content">
                  <p>
                    As soon as your order is shipped, you will receive a
                    shipping confirmation e-mail with a tracking number.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th>Region</th>
                          <th>Time</th>
                          <th>Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Netherlands</td>
                          <td>3 - 7 business days</td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td>Europe Zone 1</td>
                          <td>5 - 9 business days</td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td>Europe Zone 2</td>
                          <td>7 - 10 business days</td>
                          <td>€ 10,00 (Free over €99)</td>
                        </tr>
                        <tr>
                          <td>Outside Europe</td>
                          <td>9 - 12 business days</td>
                          <td>€ 10,00 (Free over €250)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section
                className={clsx(
                  styles.section,
                  styles.sectionReturns,
                  "collapse",
                  "collapse-plus"
                )}
                tabIndex={0}
              >
                <div className="collapse-title text-base">Returns</div>
                <div className="collapse-content">
                  <p>
                    Our returns policy is very simple - we will accept returns
                    for any reason, and issue a refund or store credit. Anything
                    that has been purchased online can be returned to our
                    warehouse.{" "}
                  </p>
                  <p>
                    To begin the returns process, please go to our{" "}
                    <a
                      href="https://www.returnform.com/dailypaperclothing"
                      target="_blank"
                      rel="noreferrer"
                      title="Return Portal Daily Paper"
                    >
                      Return Portal
                    </a>
                    . You will need your order number along with the email you
                    used when making your purchase. Please fill out the form and
                    follow the directions to make your return. Through our
                    Return Portal you can buy a return label at a discounted
                    price.
                  </p>
                  <p>
                    All products must be returned within 14 days of receipt.
                  </p>
                  <p>All products must be unworn and unwashed.</p>
                  <p>
                    All products must have all original Daily Paper tags still
                    attached.
                  </p>
                  <p>
                    For hygiene reasons, underwear briefs, bodies, swimwear,
                    pierced jewellery and earbuds cannot be returned or
                    exchanged unless faulty.
                  </p>
                  <p>
                    Any products purchased in our sale can not be returned in
                    our in-store.
                  </p>
                </div>
              </section>
              <footer></footer>
            </section>
          </div>
          <section className={clsx(styles.gallery, styles.galleryAdditional)}>
            {product.images.nodes.slice(2).map((image, index) => (
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
          </section>
        </article>
        <aside className={clsx(styles.aside)}>
          <h2>Related Products</h2>
        </aside>
      </Layout>
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
      # hasOnlyDefaultVariant
      # productCategory {
      #   fullName
      #   isLeaf
      #   isRoot
      #   name
      # }
      # productType
      # status
      # templateSuffix
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
