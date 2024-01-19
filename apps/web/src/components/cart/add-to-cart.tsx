"use client";

import { LoadingDots } from "@/components/loading/dots";
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
import { cn, getLangProperties } from "@uncnsrdlabel/lib";
import { useSearchParams } from "next/navigation";
import { Suspense, Usable, use, useCallback } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

function SubmitButton({
  availableForSale,
  className,
  container,
  dictionary,
  lang,
  selectedVariantId,
  size,
  variant,
  view = "standard",
}: {
  availableForSale: boolean;
  className?: string;
  container?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  selectedVariantId: string | undefined;
  size: ButtonProps["size"];
  variant: ButtonProps["variant"];
  view?: "compact" | "standard";
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const cartId = useSelector<string>(() => state$.cartId.get());

  const { country } = getLangProperties(lang);

  const shopifyQueryClient = useQueryClient();

  // const addToCartMutationFn = (variables: AddToCartMutationVariables) =>
  //   getShopifyGraphQL(addToCartMutation, variables);
  const addToCartMutationFn = (variables: AddToCartMutationVariables) => {
    console.log("addToCartMutationFn", { variables });

    return getShopifyGraphQL(addToCartMutation, variables);
  };

  const createCartMutationFn = (variables: CreateCartMutationVariables) =>
    getShopifyGraphQL(createCartMutation, variables);

  type AddToCartContext = { id: number };

  type CreateCartContext = { id: number };

  const {
    isPending: isPendingAddToCart,
    mutate: mutateAddToCart,
    status: statusAddToCart,
  } = useMutation({
    mutationFn: addToCartMutationFn,
    mutationKey: ['addToCart', cartId],
    onError: (error, variables, context?: AddToCartContext) => {
      // An error happened!
      console.log("onError", { error, variables, context });
      console.log(`rolling back optimistic update with id ${context?.id}`);
    },
    onMutate: (variables): AddToCartContext => {
      // A mutation is about to happen!
      console.log("onMutate", { variables });

      // Optionally return a context containing data to use when for example rolling back
      return { id: 1 };
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
      console.log("onSettled", { data, error, variables, context });
    },
    onSuccess: (data, variables, context) => {
      console.log("onSuccess", { data, variables, context });

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
    mutationFn: createCartMutationFn,
    mutationKey: ['createCart', cartId],
    onError: (error, variables, context?: CreateCartContext) => {
      // An error happened!
      console.log("onError", { error, variables, context });
      console.log(`rolling back optimistic update with id ${context?.id}`);
    },
    onMutate: (variables): CreateCartContext => {
      // A mutation is about to happen!
      console.log("onMutate", { variables });

      // Optionally return a context containing data to use when for example rolling back
      return { id: 1 };
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
      console.log("onSettled", { data, error, variables, context });
    },
    onSuccess: (data, variables, context) => {
      console.log("onSuccess", { data, variables, context });

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

  const isPending = isPendingAddToCart || isPendingCreateCart;

  const disabled = isPending || !availableForSale || !selectedVariantId;
  
  let label = intl.formatMessage({
    id: "component.AddToCart.add-to-cart-enabled",
  });

  if (!availableForSale) {
    label = intl.formatMessage({
      id: "component.AddToCart.out-of-stock",
    })
  }

  if (!selectedVariantId) {
    label = intl.formatMessage({
      id: "component.AddToCart.select-options",
    })
  }

  return (
    <Button
      aria-label={label}
      aria-disabled={disabled}
      className={cn("flex gap-2 md:gap-4 relative w-full", {
        "hover:opacity-90": true,
        "cursor-not-allowed opacity-60 hover:opacity-60": disabled,
        "justify-center": view === "standard",
      }, className)}
      onClick={useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (disabled) {
          return null;
        }

        const payload = {
          merchandiseId: selectedVariantId,
          quantity: 1,
        } satisfies CartLineInput;

        if (cartId) {
          mutateAddToCart({
            cartId,
            lines: [payload],
          }, {
            onSuccess: (data, variables, context) => {
              console.log("onSuccess", { data, variables, context });
              // I will fire second!
            },
            onError: (error, variables, context) => {
              console.log("onError", { error, variables, context });
              // I will fire second!
            },
            onSettled: (data, error, variables, context) => {
              console.log("onSettled", { data, error, variables, context });
              // I will fire second!
            },
          });
        } else {
          mutateCreateCart({
            input: {
              buyerIdentity: {
                // @ts-expect-error Type 'CountryCode' is not assignable to type 'InputMaybe<CountryCode> | undefined'.
                countryCode: country,
              },
              lines: [payload],
            },
          }, {
            onSuccess: (data, variables, context) => {
              console.log("onSuccess", { data, variables, context });
              // I will fire second!
            },
            onError: (error, variables, context) => {
              console.log("onError", { error, variables, context });
              // I will fire second!
            },
            onSettled: (data, error, variables, context) => {
              console.log("onSettled", { data, error, variables, context });
              // I will fire second!
            },
          });
        }

        handleClickTrack(event);
      }, [label, selectedVariantId])}
      size={size}
      variant={variant}
    >
      {isPending ? (
        <LoadingDots className="h-5 w-12" />
      ) : (
        <PlusIcon className="h-5 w-6 ml-6" />
      )}
      {label}
      <span aria-live="polite" className="sr-only" role="status">
        {(statusAddToCart || statusCreateCart) && "Adding to cart"}
      </span>
    </Button>
  );
}

export function AddToCart({
  availableForSale,
  className,
  container,
  dictionary,
  lang,
  options,
  variants,
  view = "standard",
}: {
  availableForSale: boolean;
  className?: string;
  container?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  options: ProductOption[];
  variants: Pick<ProductVariant, "id" | "selectedOptions">[];
  view?: "compact" | "standard";
}) {
  const searchParams = useSearchParams();

  const selectedVariant = variants.find((variant) =>
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

  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

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
          <LoadingDots className="h-5 w-12" />

          {intl.formatMessage({ id: "component.AddToCart.add-to-cart-disabled" })}
        </Button>
      }
    >
      <SubmitButton
        availableForSale={availableForSale}
        className={className}
        container={container}
        dictionary={dictionary}
        lang={lang}
        selectedVariantId={selectedVariantId}
        size={size}
        variant={variant}
        view={view}
      />
    </Suspense>
  );
}
