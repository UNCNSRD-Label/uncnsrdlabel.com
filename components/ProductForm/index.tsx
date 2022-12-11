"use client";

import type {
  Product,
  ProductVariant,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { ChangeEventHandler, FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import {
  useProduct,
  AddToCartButton,
  Money,
  ShopPayButton,
} from "@shopify/hydrogen-react";
import { clsx } from "clsx";
import Router from "next/router";
import Script from "next/script";
import { useEffect, useCallback, useState } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { useQueryParam, StringParam, withDefault } from "use-query-params";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
  path: string;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
};

export const Component: FC<Props> = ({
  children,
  className,
  path,
  product,
}) => {
  // const { pathname, search } = useUrl();
  // const [params, setParams] = useState(new URLSearchParams(search));

  const { options, setSelectedOption, selectedOptions, selectedVariant } =
    useProduct();

  const [color, setColor] = useQueryParam(
    "color",
    withDefault(StringParam, "")
  );
  const [size, setSize] = useQueryParam("size", withDefault(StringParam, ""));

  // useEffect(() => {
  //   options?.map(({ name, values }) => {
  //     if (!params) return;
  //     const currentValue = params.get(name.toLowerCase()) || null;
  //     if (currentValue) {
  //       const matchedValue = values.filter(
  //         (value) => encodeURIComponent(value.toLowerCase()) === currentValue
  //       );
  //       setSelectedOption(name, matchedValue[0]);
  //     } else {
  //       params.set(
  //         encodeURIComponent(name.toLowerCase()),
  //         encodeURIComponent(selectedOptions![name]!.toLowerCase())
  //       ),
  //       window.history.replaceState(
  //         null,
  //         "",
  //         `${pathname}?${params.toString()}`
  //       );
  //     }
  //   });
  // }, [options, params, pathname, selectedOptions, setSelectedOption]);

  // console.log({ options, selectedVariant });

  const url = `${process.env.NEXT_PUBLIC_VERCEL_URL}${path}`;

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

  const handleOptionChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      if (event.target.name === "Color") {
        setColor(event.target.value);
      }

      if (event.target.name === "Size") {
        setSize(event.target.value);
      }

      setSelectedOption(event.target.name, event.target.value);
    },
    [setColor, setSelectedOption, setSize]
  );

  return (
    <>
      {/* TODO: Update schema.org data when selecting variant via */}
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
        {options?.map((option, optionIndex) => {
          if (option?.values?.length === 1) {
            return null;
          }

          return (
            <label
              key={`${option?.name}-${optionIndex}`}
              className={clsx(styles.label)}
            >
              <span className={clsx(styles.text, "text-base")}>
                {option?.name}
              </span>
              <select
                className="select select-ghost w-full mt-1"
                name={option?.name}
                onChange={handleOptionChange}
              >
                <option disabled>Select {option?.name}</option>
                {option?.values?.map((value, valueIndex) => (
                  <option key={`${option.name}-${optionIndex}-${valueIndex}`}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          );
        })}
      </section>
      <section className={clsx(styles.section, styles.sectionActions)}>
        <AddToCartButton
          accessibleAddingToCartLabel="Adding item to your cart"
          className={clsx(
            "btn",
            `btn-${isOutOfStock ? "secondary" : "primary"}`,
            "lg:btn-wide"
          )}
          disabled={isOutOfStock}
          quantity={1}
          type="button"
          variantId={selectedVariant?.id}
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
        {!isOutOfStock && (
          <ShopPayButton
            className="flex items-center"
            variantIds={[selectedVariant.id!]}
          />
        )}
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
