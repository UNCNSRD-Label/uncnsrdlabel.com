"use client";

import type {
  Product,
  ProductVariant,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";

import {
  useProduct,
  AddToCartButton,
  Money,
  ShopPayButton,
} from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Script from "next/script";
import { RiHeartAddLine } from "react-icons/ri";
import type { PartialDeep } from "type-fest";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
  url: string;
};

export const Component: FC<Props> = ({ children, className, product, url }) => {
  const { options, setSelectedOption, selectedOptions, selectedVariant } =
    useProduct();

  console.log({ options, selectedVariant });

  const isOutOfStock = !selectedVariant?.availableForSale || false;
  let isOnSale = false;

  if (
    selectedVariant?.priceV2?.amount &&
    selectedVariant?.compareAtPriceV2?.amount
  ) {
    isOnSale =
      selectedVariant?.priceV2?.amount <
      selectedVariant?.compareAtPriceV2?.amount;
  }

  const getAvailability = (
    variant?: PartialDeep<
      Pick<
        ProductVariant,
        "availableForSale" | "currentlyNotInStock" | "quantityAvailable"
      >,
      { recurseIntoArrays: true }
    >
  ) => {
    if (!variant?.availableForSale) {
      return false;
    }

    let availability = "PreOrder";

    if (variant?.currentlyNotInStock) {
      availability = "OutOfStock";
    }

    if (variant?.quantityAvailable) {
      availability = "LimitedAvailability";
    }

    if (variant?.availableForSale) {
      availability = "InStock";
    }

    return `https://schema.org/${availability}`;
  };

  return (
    <>
      {/* <Script
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
              offerCount: 1,
              offers: [
                product.variants?.nodes?.map((variant, index) => ({
                  "@type": "Offer",
                  url,
                  title: variant?.title,
                  priceCurrency: variant?.price?.currencyCode,
                  price: variant?.price?.amount,
                  availability: getAvailability(variant),
                  itemCondition: "https://schema.org/NewCondition",
                })),
              ],
            },
          }),
        }}
      /> */}
      <section
        className={clsx(
          styles.section,
          styles.sectionOptions,
          "not-prose",
          "dropdown",
          "dropdown-top",
          "dropdown-hover"
        )}
      >
        {options?.map((option, optionIndex) => (
          <label key={`${option?.name}-${optionIndex}`}>
            <span>{option?.name}</span>
            <select className="select select-ghost w-full" defaultValue="S">
              <option disabled>Select {option?.name}</option>
              {option?.values?.map((value, valueIndex) => (
                <option key={`${option.name}-${optionIndex}-${valueIndex}`}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        ))}
      </section>
      <section className={clsx(styles.section, styles.sectionActions)}>
        <AddToCartButton
          className={clsx(
            "btn",
            `btn-${isOutOfStock ? "secondary" : "primary"}`,
            "lg:btn-wide"
          )}
        >
          {isOutOfStock ? (
            <span>Sold out</span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>Add to bag</span> <span>·</span>{" "}
              {selectedVariant.priceV2 && (
                <Money
                  withoutTrailingZeros
                  data={selectedVariant.priceV2}
                  as="span"
                />
              )}
              {selectedVariant.compareAtPriceV2 && isOnSale && (
                <Money
                  withoutTrailingZeros
                  data={selectedVariant.compareAtPriceV2}
                  as="span"
                  className="opacity-50 strike"
                />
              )}
            </span>
          )}
        </AddToCartButton>
        <button className={clsx("btn", "btn-circle", "btn-outline", "gap-2")}>
          <RiHeartAddLine
            aria-hidden="true"
            className={clsx("icon")}
            title="Add to wishlist"
          />
          <span className={clsx("sr-only")}>Add to wishlist</span>
        </button>
      </section>
    </>
  );
};

export default Component;
