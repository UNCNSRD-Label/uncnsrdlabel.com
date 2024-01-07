"use client";

import {
  type ProductOption,
  type ProductVariant,
} from "@shopify/hydrogen/storefront-api-types";
import { Button } from "@uncnsrdlabel/components/ui/button";
import {
  getFragmentData,
  productDetailsFragment,
  type FragmentType
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, createUrl } from "@uncnsrdlabel/lib";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react";
import { type PartialDeep } from "type-fest";
import { useTrack } from "use-analytics";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

export function VariantSelector({
  options,
  productDetailsFragmentRef,
  variants,
}: {
  options: ProductOption[];
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
  variants: PartialDeep<
    ProductVariant,
    {
      recurseIntoArrays: true;
    }
  >[];
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

  const combinations: Combination[] = variants.map((variant, index) => ({
    id: variant.id ?? `variant-${index}`,
    availableForSale: !!variant.availableForSale,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    ...variant.selectedOptions?.reduce(
      (accumulator, option) => ({
        ...accumulator,
        [option?.name?.toLowerCase() ?? index]: option?.value,
      }),
      {},
    ),
  }));

  const item = {
    // item_variant:
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
    <dl className="mb-2 grid gap-1 md:gap-2">
      {options.map((option) => (
        <Fragment key={option.id}>
          <dt className="text-sm uppercase">{option.name}</dt>
          <dd className="mb-2 flex flex-wrap gap-3">
            {option.values.map((value) => {
              const optionNameLowerCase = option.name.toLowerCase();

              // Base option params on current params so we can preserve any other param state in the url.
              const optionSearchParams = new URLSearchParams(
                searchParams.toString(),
              );

              // Update the option params using the current option to reflect how the url *would* change,
              // if the option was clicked.
              optionSearchParams.set(optionNameLowerCase, value);
              const optionUrl = createUrl(pathname, optionSearchParams);

              // In order to determine if an option is available for sale, we need to:
              //
              // 1. Filter out all other param state
              // 2. Filter out invalid options
              // 3. Check if the option combination is available for sale
              //
              // This is the "magic" that will cross check possible variant combinations and preemptively
              // disable combinations that are not available. For example, if the color gray is only available in size medium,
              // then all other sizes should be disabled.
              const filtered = Array.from(optionSearchParams.entries()).filter(
                ([key, value]) =>
                  options.find(
                    (option) =>
                      option.name.toLowerCase() === key &&
                      option.values.includes(value),
                  ),
              );
              const isAvailableForSale = combinations.find((combination) =>
                filtered.every(
                  ([key, value]) =>
                    combination[key] === value && combination.availableForSale,
                ),
              );

              // The option is active if it's in the url params.
              const isActive =
                searchParams.get(optionNameLowerCase) === value ||
                option.values.length === 1;

              return (
                <Button
                  key={value}
                  aria-disabled={!isAvailableForSale}
                  disabled={!isAvailableForSale}
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
                  title={`${option.name} ${value}${
                    !isAvailableForSale ? " (Out of Stock)" : ""
                  }`}
                  className={cn(
                    "focus-visible:bg-hotPink/20 focus-visible:ring-hotPink flex h-8 min-w-[48px] items-center justify-center px-2 text-sm",
                    "hover:text-dark focus-visible:text-dark",
                    {
                      "text-hotPink ring-hotPink cursor-default ring-1":
                        isActive,
                      "hover:bg-hotPink/20 hover:ring-hotPink ring-1 ring-gray-500 transition duration-300 ease-in-out":
                        !isActive && isAvailableForSale,
                      "relative z-10 cursor-not-allowed overflow-hidden before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-gray-500 before:transition-transform":
                        !isAvailableForSale,
                    },
                  )}
                  variant="ghost"
                >
                  {value}
                </Button>
              );
            })}
          </dd>
        </Fragment>
      ))}
    </dl>
  );
}
