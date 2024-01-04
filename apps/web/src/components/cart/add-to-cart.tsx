"use client";

import { LoadingDots } from "@/components/loading/dots";
import { useGetIntl } from "@/lib/i18n";
import { createIntl } from "@formatjs/intl";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  type CartLineInput,
  type ProductOption,
  type ProductVariant,
} from "@shopify/hydrogen/storefront-api-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/ui/button";
import {
  addToCartMutation,
  getCartQuery,
  getQueryKey,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { getCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";

function SubmitButton({
  availableForSale,
  className,
  intl,
  selectedVariantId,
}: {
  availableForSale: boolean;
  className?: string;
  intl: ReturnType<typeof createIntl<string>>;
  selectedVariantId: string | undefined;
}) {
  const buttonClasses =
    "btn btn-bg btn-primary btn-lg relative w-full justify-center";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  const cartId = (getCookie("cartId") as string) ?? "{}";

  const shopifyQueryClient = useQueryClient();

  const { isPending, mutate, status } = useMutation({
    mutationFn: (variables: { cartId: string; lines: CartLineInput[] }) =>
      getShopifyGraphQL(addToCartMutation, variables),
    onSuccess: () => {
      const queryKey = getQueryKey(getCartQuery, {
        cartId,
      });

      shopifyQueryClient.invalidateQueries({
        queryKey,
      });
    },
  });

  if (!availableForSale) {
    return (
      <Button
        aria-disabled
        className={cn(buttonClasses, disabledClasses, className)}
        disabled
      >
        {intl.formatMessage({ id: "out-of-stock" })}

        <span aria-live="polite" className="sr-only" role="status">
          {status}
        </span>
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        aria-label={intl.formatMessage({ id: "select-options" })}
        aria-disabled
        className={cn(buttonClasses, disabledClasses)}
        disabled
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        {intl.formatMessage({ id: "select-options" })}

        <span aria-live="polite" className="sr-only" role="status">
          {status}
        </span>
      </Button>
    );
  }

  return (
    <Button
      aria-label={intl.formatMessage({ id: "add-to-cart-enabled" })}
      aria-disabled={isPending}
      className={cn(buttonClasses, {
        "hover:opacity-90": true,
        disabledClasses: isPending,
      })}
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (isPending) e.preventDefault();

        const payload = {
          merchandiseId: selectedVariantId,
          quantity: 1,
        } satisfies CartLineInput;

        mutate({
          cartId,
          lines: [payload],
        });
      }}
    >
      <div className="absolute left-0 ml-4">
        {isPending ? (
          <LoadingDots className="mb-3" />
        ) : (
          <PlusIcon className="h-5" />
        )}
      </div>
      {intl.formatMessage({ id: "add-to-cart-enabled" })}

      <span aria-live="polite" className="sr-only" role="status">
        {status}
      </span>
    </Button>
  );
}

export function AddToCart({
  availableForSale,
  className,
  options,
  variants,
}: {
  availableForSale: boolean;
  className?: string;
  options: ProductOption[];
  variants: Pick<ProductVariant, "id" | "selectedOptions">[];
}) {
  const intl = useGetIntl("component.AddToCart");

  const searchParams = useSearchParams();
  const defaultVariantId = variants[0]?.id;
  const variant = variants.find(
    (variant) =>
      variant.selectedOptions?.every((selectedOption) => {
        const hasNoOptionsOrJustOneOption =
          !options?.length ||
          options?.find((option) => option.name === selectedOption.name)?.values
            .length === 1;

        if (hasNoOptionsOrJustOneOption) {
          return true;
        }

        const value =
          selectedOption?.value ===
          searchParams.get(selectedOption.name.toLowerCase());

        return value;
      }),
  );
  const selectedVariantId = variant?.id;

  return (
    <SubmitButton
      availableForSale={availableForSale}
      className={className}
      intl={intl}
      selectedVariantId={selectedVariantId}
    />
  );
}
