"use client";

import { ProductOption, ProductVariant } from "@uncnsrdlabel/graphql-shopify-storefront/types";
import { createUrl } from "@uncnsrdlabel/lib/utils";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

export function VariantSelector({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({
        ...accumulator,
        [option.name.toLowerCase()]: option.value,
      }),
      {},
    ),
  }));

  return options.map((option) => (
    <dl className="mb-8" key={option.id}>
      <dt className="mb-4 text-sm uppercase">{option.name}</dt>
      <dd className="flex flex-wrap gap-3">
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
          const isActive = searchParams.get(optionNameLowerCase) === value;

          // You can't disable a link, so we need to render something that isn't clickable.
          const DynamicTag = isAvailableForSale ? Link : "span";
          const dynamicProps = {
            ...(isAvailableForSale && { scroll: false }),
          };

          return (
            <DynamicTag
              key={value}
              aria-disabled={!isAvailableForSale}
              href={optionUrl}
              title={`${option.name} ${value}${
                !isAvailableForSale ? " (Out of Stock)" : ""
              }`}
              className={clsx(
                "focus-visible:bg-hotPink/20 focus-visible:ring-hotPink flex h-12 min-w-[48px] items-center justify-center px-2 text-sm",
                "hover:text-dark focus-visible:text-dark",
                {
                  "text-hotPink ring-hotPink cursor-default ring-1": isActive,
                  "hover:bg-hotPink/20 hover:ring-hotPink ring-1 ring-gray-500 transition duration-300 ease-in-out":
                    !isActive && isAvailableForSale,
                  "relative z-10 cursor-not-allowed overflow-hidden before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-gray-500 before:transition-transform":
                    !isAvailableForSale,
                },
              )}
              {...dynamicProps}
            >
              {value}
            </DynamicTag>
          );
        })}
      </dd>
    </dl>
  ));
}
