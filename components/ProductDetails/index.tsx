"use client";

import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode, RefObject } from "react";
import type { PartialDeep } from "type-fest";

import { ProductPrice, ProductProvider } from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import FeaturedMediaGallery from "#/components/FeaturedMediaGallery";
import ProductForm from "#/components/ProductForm";

import styles from "./index.module.css";

type Props = {
  className?: ReactNode;
  path: string;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
  scrollingElement: RefObject<HTMLDivElement>;
};

export const Component: FC<Props> = ({
  className,
  path,
  product,
  scrollingElement,
}) => {
  if (!product) {
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <ProductProvider data={product}>
      <article className={clsx(styles.article, className)}>
        <FeaturedMediaGallery
          className={clsx(styles.featuredMediaGallery)}
          product={product}
          scrollingElement={scrollingElement}
        />
        <div className={clsx(styles.stickyContainer)}>
          <section className={clsx(styles.details)}>
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
                href={`/categories/${product.productType}`}
                className={styles.categoryLink}
                title="Go to category page"
              >
                {product.productType}
              </Link>
              <h1 className={clsx(styles.title)}>{product.title}</h1>
              <ProductPrice className={clsx(styles.price)} data={product} />
            </header>
            <ProductForm path={path} product={product} />
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
