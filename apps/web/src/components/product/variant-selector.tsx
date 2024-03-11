"use client";

import { LinkedDataProduct } from "@/components/linked-data/product";
import {
  type ProductOption,
  type ProductVariant,
} from "@shopify/hydrogen/storefront-api-types";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  getFragmentData,
  productDetailsFragment,
  type FragmentType,
  type MoneyV2,
  type UnitPriceMeasurement,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, createUrl } from "@uncnsrdlabel/lib";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react";
import { useTrack } from "use-analytics";

export function VariantSelector({
  lang,
  options,
  productDetailsFragmentRef,
  variants,
}: {
  lang: Intl.BCP47LanguageTag;
  options: ProductOption[];
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
  variants: ProductVariant[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const track = useTrack();

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const item = {
    discount:
      Number.parseInt(product.priceRange.minVariantPrice.amount) -
      Number.parseInt(product.compareAtPriceRange.minVariantPrice.amount),
    item_brand: product.vendor,
    item_category: product.collections.edges[0].node.title,
    item_id: product.id,
    item_name: product.title,
    price: product.priceRange.minVariantPrice.amount,
  };

  return (
    <>
      <dl className="mb-2 grid gap-1 md:gap-2">
        {options.map((option) => (
          <Fragment key={option.id}>
            <dt className="text-sm uppercase">{option.name}</dt>
            <dd className="mb-2 flex flex-wrap gap-3">
              {option.values.map((optionValue) => {
                const name = option.name.toLowerCase();
                const value = optionValue.toLowerCase();

                // Base option params on current params so we can preserve any other param state in the url.
                const optionSearchParams = new URLSearchParams(
                  searchParams?.toString(),
                );

                if (!pathname) {
                  return null;
                }

                // Update the option params using the current option to reflect how the url *would* change,
                // if the option was clicked.
                optionSearchParams.set(name, value);
                const optionUrl = createUrl(pathname, optionSearchParams);

                const current = variants.find((variant) =>
                  variant.selectedOptions?.every(
                    (selectedOption) =>
                      selectedOption?.name &&
                      optionSearchParams.has(
                        selectedOption.name.toLowerCase(),
                        selectedOption.value.toLowerCase(),
                      ),
                  ),
                ) as Omit<ProductVariant, "compareAtPrice" | "price"> & {
                  compareAtPrice: MoneyV2;
                  price: MoneyV2;
                  unitPriceMeasurement?: UnitPriceMeasurement;
                  unitPrice?: MoneyV2;
                };

                // The option is active if it's in the url params.
                const isActive =
                  searchParams?.get(name) === value ||
                  option.values.length === 1;

                return (
                  <>
                    <Button
                      key={value}
                      aria-disabled={current?.availableForSale === false}
                      disabled={current?.availableForSale === false}
                      onClick={(event) => {
                        const { dataset } = event.currentTarget;

                        track("view_item", {
                          ...dataset,
                          currency:
                            product.compareAtPriceRange.minVariantPrice
                              .currencyCode,
                          value: product.priceRange.minVariantPrice.amount,
                          items: [{ ...item, item_variant: value }],
                        });

                        router.replace(optionUrl, { scroll: false });
                      }}
                      title={`${option.name} ${optionValue}${
                        current?.availableForSale === false
                          ? " (Out of Stock)"
                          : ""
                      }`}
                      className={cn(
                        "focus-visible:bg-hotPink/20 focus-visible:ring-hotPink flex h-8 min-w-[48px] items-center justify-center px-2 text-sm",
                        "hover:text-dark focus-visible:text-dark",
                        {
                          "text-hotPink ring-hotPink cursor-default ring-1":
                            isActive,
                          "hover:bg-hotPink/20 hover:ring-hotPink ring-1 ring-gray-500 transition duration-300 ease-in-out":
                            !isActive && current?.availableForSale === true,
                          "relative z-10 cursor-not-allowed overflow-hidden before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-gray-500 before:transition-transform":
                            current?.availableForSale === false,
                        },
                      )}
                      variant="ghost"
                    >
                      {optionValue}
                    </Button>
                    {current?.id && (
                      <LinkedDataProduct
                        lang={lang}
                        product={product}
                        variant={current}
                      />
                    )}
                  </>
                );
              })}
            </dd>
          </Fragment>
        ))}
      </dl>
    </>
  );
}
