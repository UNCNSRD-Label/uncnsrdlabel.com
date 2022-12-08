"use client";

import type {
  Product,
  ProductVariant,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { Stage } from "@react-three/drei";
import { ProductPrice, ProductProvider } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import ProductForm from "#/components/ProductForm";

import FemaleSportswear2 from "#/components/canvas/FemaleSportswear2";
import Scene from "#/components/canvas/Scene";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
  url: string;
};

export const Component: FC<Props> = ({ children, className, product, url }) => {
  if (!product) {
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <ProductProvider data={product}>
      <article className={clsx(styles.article)}>
        <section
          className={clsx(styles.gallery, styles.galleryFeatured)}
          id="galleryFeatured"
        >
          {/* @TODO: Add WAI-ARI */}
          <div className={clsx(styles.stepsContainer)}>
            <menu className={clsx(styles.steps, "steps", "steps-vertical")}>
              {product.images?.nodes?.slice(0, 2)?.map((image, index) => (
                <Link
                  key={index}
                  href={`#galleryFeatured-${index}`}
                  className="step"
                >
                  <span className={clsx("sr-only")}>Go to image {index}</span>
                </Link>
              ))}
              <Link href={`#galleryFeatured-model`} className="step">
                <span className={clsx("sr-only")}>Go to model</span>
              </Link>
            </menu>
          </div>
          {product.images?.nodes
            ?.slice(0, 2)
            ?.filter(Boolean)
            .map((image, index) => {
              if (!image?.url) {
                return;
              }

              return (
                <figure
                  className={clsx(styles.figure)}
                  id={`galleryFeatured-${index}`}
                  key={index}
                >
                  <Image
                    alt={image?.altText ?? IMAGE_ALT_TEXT_FALLBACK}
                    className={clsx(styles.image)}
                    fill
                    priority
                    sizes={`(max-width: ${theme.screens.xs.max}) 100vw,
                    25vw`}
                    src={image?.url}
                    title={product.title ?? IMAGE_TITLE_FALLBACK}
                  />
                  <figcaption className={clsx(styles.figcaption)}>
                    Featured image for {product.title}
                  </figcaption>
                </figure>
              );
            })}

          <figure
            className={clsx(styles.figure, styles.model)}
            id={`galleryFeatured-model`}
          >
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
        </section>
        <div className={clsx(styles.stickyContainer)}>
          <section className={clsx(styles.details)}>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <header
              className={clsx(
                styles.header,
                "prose",
                "prose-xs",
                "prose-h1:mb-0",
                "max-w-none"
              )}
            >
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
            <ProductForm product={product} url={url} />
            {product.descriptionHtml && (
              <section
                className={clsx(
                  styles.section,
                  styles.sectionDescription,
                  "prose",
                  "prose-xs",
                  "max-w-none"
                )}
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            )}
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
                  As soon as your order is shipped, you will receive a shipping
                  confirmation e-mail with a tracking number.
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
                  Our returns policy is very simple - we will accept returns for
                  any reason, and issue a refund or store credit. Anything that
                  has been purchased online can be returned to our warehouse.{" "}
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
                  follow the directions to make your return. Through our Return
                  Portal you can buy a return label at a discounted price.
                </p>
                <p>All products must be returned within 14 days of receipt.</p>
                <p>All products must be unworn and unwashed.</p>
                <p>
                  All products must have all original Daily Paper tags still
                  attached.
                </p>
                <p>
                  For hygiene reasons, underwear briefs, bodies, swimwear,
                  pierced jewellery and earbuds cannot be returned or exchanged
                  unless faulty.
                </p>
                <p>
                  Any products purchased in our sale can not be returned in our
                  in-store.
                </p>
              </div>
            </section>
            <footer></footer>
          </section>
        </div>
        <section className={clsx(styles.gallery, styles.galleryAdditional)}>
          {product.images?.nodes
            ?.slice(2)
            ?.filter(Boolean)
            .map((image, index) => {
              if (!image?.url) {
                return;
              }
              return (
                <figure key={index} className={clsx(styles.figure)}>
                  <Image
                    alt={image?.altText ?? IMAGE_ALT_TEXT_FALLBACK}
                    className={clsx(styles.image)}
                    fill
                    priority
                    sizes={`(max-width: ${theme.screens.xs.max}) 100vw,
                  25vw`}
                    src={image.url}
                    title={product.title ?? IMAGE_TITLE_FALLBACK}
                  />
                  <figcaption className={clsx(styles.figcaption)}>
                    Featured image for {product.title}
                  </figcaption>
                </figure>
              );
            })}
        </section>
      </article>
    </ProductProvider>
  );
};

export default Component;
