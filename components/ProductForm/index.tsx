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
import Script from "next/script";
import { useCallback } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { useQueryParam, StringParam, withDefault } from "use-query-params";

import { getColorHexCodeByName } from "#/lib/util/GraphQL";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
  path: string;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
};

export const Component: FC<Props> = ({ children, className, path }) => {
  const { options, setSelectedOption, selectedVariant, variants } =
    useProduct();

  const [color, setColor] = useQueryParam(
    "color",
    withDefault(StringParam, "")
  );
  const [size, setSize] = useQueryParam("size", withDefault(StringParam, ""));

  const isOutOfStock = !selectedVariant?.availableForSale || false;

  // TODO: Merge with version of this code in schema.org lib
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

  const handleOptionChange = useCallback<
    ChangeEventHandler<HTMLSelectElement | HTMLInputElement>
  >(
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

          if (option?.name && ["Color", "Size"].includes(option?.name)) {
            return (
              <div
                key={`${option?.name}-${optionIndex}`}
                className={clsx(styles.inputGroupContainer)}
              >
                <span className={clsx(styles.title, "text-base")}>
                  {option?.name}
                </span>
                <div
                  className={clsx(
                    "form-control-group",
                    "input-group",
                    "justify-end",
                    "mt-1",
                    "w-full",
                    `form-control-group--${option?.name}`
                  )}
                >
                  {option?.values?.map((value, valueIndex) => (
                    <div
                      className={clsx("form-control")}
                      key={`${option.name}-${optionIndex}-${valueIndex}`}
                    >
                      <label
                        className={clsx(
                          "cursor-pointer",
                          "label",
                          styles.label,
                          option?.name === "Size" && "pl-0"
                        )}
                      >
                        <span className={clsx("label-text", styles.labelText)}>
                          {value}
                        </span>
                        <span
                          className={clsx(
                            "radioContainer",
                            styles.radioContainer
                          )}
                        >
                          <input
                            className={clsx(
                              "radio",
                              option?.name === "Color" && "radio-lg",
                              option?.name === "Size" && "hidden",
                              value &&
                                variants &&
                                `checked:bg-[${getColorHexCodeByName(
                                  value,
                                  variants
                                )}]`
                            )}
                            name={option?.name}
                            onChange={handleOptionChange}
                            type="radio"
                            style={{
                              ...(option?.name === "Color" &&
                                value &&
                                variants && {
                                  backgroundColor: getColorHexCodeByName(
                                    value,
                                    variants
                                  ),
                                }),
                            }}
                            value={value}
                          />
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            );
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
              Add to bag
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