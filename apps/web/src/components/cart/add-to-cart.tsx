"use client";

import { LoadingDots } from "@/components/loading/dots";
import { useGetIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { createIntl } from "@formatjs/intl";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useSelector } from "@legendapp/state/react";
import {
  type CartLineInput,
  type ProductOption,
  type ProductVariant,
} from "@shopify/hydrogen/storefront-api-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/ui/button";
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
import { useCallback } from "react";
import { useTrack } from "use-analytics";

function SubmitButton({
  availableForSale,
  className,
  container,
  intl,
  selectedVariantId,
}: {
  availableForSale: boolean;
  className?: string;
  container?: string;
  intl: ReturnType<typeof createIntl<string>>;
  selectedVariantId: string | undefined;
}) {
  const buttonClasses =
    "btn btn-bg btn-primary btn-lg relative w-full justify-center";
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
        onClick={useCallback(
          handleClickTrack,
          [],
        )}
        disabled
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
        onClick={useCallback(
          handleClickTrack,
          [],
        )}
        disabled
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
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
      onClick={useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
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
        },
        [],
      )}
    >
      <div className="absolute left-0 ml-4">
        {isPendingAddToCart ? (
          <LoadingDots className="mb-3" />
        ) : (
          <PlusIcon className="h-5" />
        )}
      </div>
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
}: {
  availableForSale: boolean;
  className?: string;
  container?: string;
  options: ProductOption[];
  variants: Pick<ProductVariant, "id" | "selectedOptions">[];
}) {
  const intl = useGetIntl("component.AddToCart");

  const searchParams = useSearchParams();

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
      container={container}
      intl={intl}
      selectedVariantId={selectedVariantId}
    />
  );
}
