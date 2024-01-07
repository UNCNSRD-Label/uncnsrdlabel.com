"use client";

import { LoadingDots } from "@/components/loading/dots";
import { useGetIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useSelector } from "@legendapp/state/react";
import {
  type CartLineInput,
  type ProductOption,
  type ProductVariant,
} from "@shopify/hydrogen/storefront-api-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, type ButtonProps } from "@uncnsrdlabel/components/ui/button";
import {
  addToCartMutation,
  cartFragment,
  createCartMutation,
  getCartQuery,
  getFragmentData,
  getQueryKey,
  getShopifyGraphQL,
  type AddToCartMutationVariables,
  type CreateCartMutationVariables,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, useGetInContextVariables } from "@uncnsrdlabel/lib";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback } from "react";
import { useTrack } from "use-analytics";

function SubmitButton({
  availableForSale,
  className,
  container,
  selectedVariantId,
  size,
  variant,
  view = "standard",
}: {
  availableForSale: boolean;
  className?: string;
  container?: string;
  selectedVariantId: string | undefined;
  size: ButtonProps['size'];
  variant: ButtonProps['variant'];
  view?: "compact" | "standard";
}) {
  const intl = useGetIntl("component.AddToCart");

  const buttonClasses = cn("flex gap-2 relative w-full", {
    "justify-center": view === "standard",
  });
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  const cartId = useSelector<string>(() => state$.cartId.get());

  const { country } = useGetInContextVariables();

  const shopifyQueryClient = useQueryClient();

  const {
    isPending: isPendingAddToCart,
    mutate: mutateAddToCart,
    status: statusAddToCart,
  } = useMutation({
    mutationFn: (variables: AddToCartMutationVariables) =>
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

  const {
    isPending: isPendingCreateCart,
    mutate: mutateCreateCart,
    status: statusCreateCart,
  } = useMutation({
    mutationFn: (variables: CreateCartMutationVariables) =>
      getShopifyGraphQL(createCartMutation, variables),
    onSuccess: () => {
      const queryKey = getQueryKey(getCartQuery, {
        cartId,
      });

      shopifyQueryClient.invalidateQueries({
        queryKey,
      });
    },
  });

  const track = useTrack();

  const handleClickTrack = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { dataset } = event.currentTarget;

    track("add_to_cart", {
      ...dataset,
      availableForSale,
      container,
      selectedVariantId,
    });
  };

  if (!availableForSale) {
    return (
      <Button
        aria-disabled
        className={cn(buttonClasses, disabledClasses, className)}
        disabled
        onClick={useCallback(handleClickTrack, [])}
        size={size}
        variant={variant}
      >
        {intl.formatMessage({ id: "out-of-stock" })}

        <span aria-live="polite" className="sr-only" role="status">
          {statusAddToCart}
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
        onClick={useCallback(handleClickTrack, [])}
        size={size}
        variant={variant}
      >
        <PlusIcon className="h-5" />

        {intl.formatMessage({ id: "select-options" })}

        <span aria-live="polite" className="sr-only" role="status">
          {statusAddToCart}
        </span>
      </Button>
    );
  }

  return (
    <Button
      aria-label={intl.formatMessage({ id: "add-to-cart-enabled" })}
      aria-disabled={isPendingAddToCart}
      className={cn(buttonClasses, {
        "hover:opacity-90": true,
        disabledClasses: isPendingAddToCart,
      })}
      onClick={useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        handleClickTrack(event);

        if (isPendingAddToCart || isPendingCreateCart) event.preventDefault();

        const payload = {
          merchandiseId: selectedVariantId,
          quantity: 1,
        } satisfies CartLineInput;

        if (cartId) {
          mutateAddToCart({
            cartId,
            lines: [payload],
          });
        } else {
          mutateCreateCart(
            {
              input: {
                buyerIdentity: {
                  // @ts-expect-error Type 'CountryCode' is not assignable to type 'InputMaybe<CountryCode> | undefined'.
                  countryCode: country,
                },
                lines: [payload],
              },
            },
            {
              onSuccess: (data) => {
                const { cartCreate } = data;

                if (cartCreate) {
                  const { cart: cartFragmentRef } = cartCreate;

                  const cart = getFragmentData(cartFragment, cartFragmentRef);

                  if (cart) {
                    // @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'Nullable<never> | ((prev: never) => never) | Promise<never>'
                    state$.cartId.set(cartId);

                    const queryKey = getQueryKey(getCartQuery, {
                      cartId,
                    });

                    shopifyQueryClient.invalidateQueries({
                      queryKey,
                    });
                  }
                }
              },
            },
          );
        }
      }, [])}
      size={size}
      variant={variant}
    >
      {isPendingAddToCart ? (
        <LoadingDots className="mb-3" />
      ) : (
        <PlusIcon className="h-5" />
      )}
      {intl.formatMessage({ id: "add-to-cart-enabled" })}

      <span aria-live="polite" className="sr-only" role="status">
        {statusAddToCart || statusCreateCart}
      </span>
    </Button>
  );
}

export function AddToCart({
  availableForSale,
  className,
  container,
  options,
  variants,
  view = "standard",
}: {
  availableForSale: boolean;
  className?: string;
  container?: string;
  options: ProductOption[];
  variants: Pick<ProductVariant, "id" | "selectedOptions">[];
  view?: "compact" | "standard";
}) {
  const searchParams = useSearchParams();

  const selectedVariant = variants.find(
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

  const selectedVariantId = selectedVariant?.id;

  const size = view === "compact" ? undefined : "lg";

  const variant = view === "compact" ? "ghost" : undefined;

  return (
    <Suspense
      fallback={
        <Button
          aria-disabled
          className={className}
          disabled
          size={size}
          variant={variant}
        >
          <LoadingDots className="mb-3" />

          {/* {intl.formatMessage({ id: "add-to-cart-disabled" })} */}
        </Button>
      }
    >
      <SubmitButton
        availableForSale={availableForSale}
        className={className}
        container={container}
        selectedVariantId={selectedVariantId}
        size={size}
        variant={variant}
        view={view}
      />
    </Suspense>
  );
}
