"use client";

import { LoadingDots } from "@/components/loading/dots";
import { createIntl } from "@formatjs/intl";
import { CheckIcon, ClockIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  type CartLineInput,
  type ProductOption,
  type ProductVariant,
} from "@shopify/hydrogen/storefront-api-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  type ButtonProps,
} from "@uncnsrdlabel/components/atoms/button";
import {
  addToCartMutation,
  cartFragment,
  cartQuery,
  createCartMutation,
  getFragmentData,
  getInContextVariables,
  getShopifyGraphQL,
  type AddToCartMutationVariables,
  type CreateCartMutationVariables,
  type SellingPlanGroup,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, getQueryKey } from "@uncnsrdlabel/lib";
import { getCookie, setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { Suspense, Usable, use, useCallback } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { toast } from "sonner";
import { useTrack } from "use-analytics";

type AddToCartContext = { id: number };

type CreateCartContext = { id: number };

function SubmitButton({
  availableForSale,
  className,
  container,
  dictionary,
  lang,
  preOrder,
  selectedVariantId,
  size,
  variant,
}: {
  availableForSale: boolean;
  className?: string;
  container?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  preOrder?: Partial<SellingPlanGroup>;
  selectedVariantId: string | undefined;
  size: ButtonProps["size"];
  variant: ButtonProps["variant"];
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const shopifyQueryClient = useQueryClient();

  const cartId = getCookie("cartId");

  const customerAccessToken = getCookie("customerAccessToken");

  const email = getCookie("email");

  const track = useTrack();

  const { country } = getInContextVariables(lang);

  const sellingPlanId = preOrder?.sellingPlans?.edges?.[0]?.node?.id ?? null;

  const addToCartMutationFn = (variables: AddToCartMutationVariables) => {
    return getShopifyGraphQL(addToCartMutation, variables);
  };

  const createCartMutationFn = (variables: CreateCartMutationVariables) =>
    getShopifyGraphQL(createCartMutation, variables);

  const invalidateQueries = () => {
    const queryKey = getQueryKey(cartQuery, {
      cartId: cartId as string,
    });

    shopifyQueryClient.invalidateQueries({
      queryKey,
    });
  };

  const {
    isPending: isPendingAddToCart,
    mutate: mutateAddToCart,
    status: statusAddToCart,
  } = useMutation({
    mutationFn: addToCartMutationFn,
    mutationKey: ["addToCart", cartId],
    onError: (error, variables, context?: AddToCartContext) => {
      console.error("onError", { error, variables, context });

      toast.error(
        intl.formatMessage({
          id: "component.AddToCart.toast.error",
        }),
      );
    },
    onSuccess: (data, variables, context) => {
      console.debug("onSuccess", { data, variables, context });

      const { cartLinesAdd } = data;

      if (cartLinesAdd) {
        const { cart: cartFragmentRef } = cartLinesAdd;

        const cart = getFragmentData(cartFragment, cartFragmentRef);

        if (cart?.id) {
          console.debug("cart", { cart });
          setCookie("cart", {
            cost: cart.cost,
            id: cart.id,
            totalQuantity: cart.totalQuantity,
          });
          setCookie("cartId", cart.id);

          toast.success(
            intl.formatMessage({
              id: "component.AddToCart.toast.success",
            }),
          );
        }
      }

      toast.success(
        intl.formatMessage({
          id: "component.AddToCart.toast.success",
        }),
        {
          onDismiss: () => {
            invalidateQueries();
          },
          onAutoClose: () => {
            invalidateQueries();
          },
        },
      );
    },
  });

  const {
    isPending: isPendingCreateCart,
    mutate: mutateCreateCart,
    status: statusCreateCart,
  } = useMutation({
    mutationFn: createCartMutationFn,
    mutationKey: ["createCart", cartId],
    onError: (error, variables, context?: CreateCartContext) => {
      console.error("onError", { error, variables, context });

      toast.error(
        intl.formatMessage({
          id: "component.AddToCart.toast.error",
        }),
      );
    },
    onSuccess: (data, variables, context) => {
      console.debug("onSuccess", { data, variables, context });

      const { cartCreate } = data;

      if (cartCreate) {
        const { cart: cartFragmentRef } = cartCreate;

        const cart = getFragmentData(cartFragment, cartFragmentRef);

        if (cart?.id) {
          console.debug("cart", { cart });
          setCookie("cart", {
            cost: cart.cost,
            id: cart.id,
            totalQuantity: cart.totalQuantity,
          });
          setCookie("cartId", cart.id);

          toast.success(
            intl.formatMessage({
              id: "component.AddToCart.toast.success",
            }),
          );
        }
      }
    },
  });

  const isPending = isPendingAddToCart || isPendingCreateCart;

  const isDisabled = isPending || !availableForSale || !selectedVariantId;

  const isSuccess =
    statusAddToCart === "success" || statusCreateCart === "success";

  let label = intl.formatMessage({
    id: "component.AddToCart.add-to-cart-enabled",
  });

  if (!selectedVariantId) {
    label = intl.formatMessage({
      id: "component.AddToCart.select-options",
    });
  }

  if (!availableForSale) {
    label = intl.formatMessage({
      id: "component.AddToCart.out-of-stock",
    });
  }

  if (preOrder) {
    label = intl.formatMessage({
      id: "component.AddToCart.pre-order",
    });
  }

  if (isPending) {
    label = intl.formatMessage({
      id: "component.AddToCart.pending",
    });
  }

  if (isSuccess) {
    label = intl.formatMessage({
      id: "component.AddToCart.success",
    });
  }

  const handleClickTrack = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isPending) event.preventDefault();

      track("add_to_cart", {
        availableForSale,
        container,
        selectedVariantId,
        sellingPlanId,
      });
    },
    [availableForSale, container, isPending, selectedVariantId, sellingPlanId, track],
  );

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (isDisabled) {
        return null;
      }

      const payload = {
        merchandiseId: selectedVariantId,
        quantity: 1,
        sellingPlanId,
      } satisfies CartLineInput;

      if (cartId) {
        mutateAddToCart({
          cartId,
          lines: [payload],
        });
      } else {
        mutateCreateCart({
          input: {
            buyerIdentity: {
              countryCode: country,
              customerAccessToken,
              email,
            },
            lines: [payload],
          },
        });
      }

      handleClickTrack(event);
    },
    [
      cartId,
      country,
      customerAccessToken,
      email,
      handleClickTrack,
      isDisabled,
      mutateAddToCart,
      mutateCreateCart,
      selectedVariantId,
      sellingPlanId,
    ],
  );

  return (
    <Button
      aria-label={label}
      aria-disabled={isDisabled}
      className={cn(
        "relative flex w-full gap-2 md:gap-4",
        {
          "cursor-not-allowed opacity-60 hover:opacity-60": isDisabled,
        },
        className,
      )}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      {isSuccess ? (
        <CheckIcon className="h-5 w-6" />
      ) : preOrder ? (
        <ClockIcon className="h-5 w-6" />
      ) : isPending ? (
        <LoadingDots className="h-2 w-6" />
      ) : (
        <PlusIcon className="h-5 w-6" />
      )}
      {label}
      <span aria-live="polite" className="sr-only" role="status">
        {isPending &&
          intl.formatMessage({
            id: "component.AddToCart.pending",
          })}
        {isSuccess &&
          intl.formatMessage({
            id: "component.AddToCart.success",
          })}
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
  preOrder,
  variants,
  view = "standard",
}: {
  availableForSale: boolean;
  className?: string;
  container?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  options: ProductOption[];
  preOrder?: Partial<SellingPlanGroup>;
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

  const size = view === "compact" ? "xs" : "base";

  const variant = view === "compact" ? "secondary" : "default";

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
          <LoadingDots className="h-2 w-6" />

          {intl.formatMessage({
            id: "component.AddToCart.add-to-cart-disabled",
          })}
        </Button>
      }
    >
      <SubmitButton
        availableForSale={availableForSale}
        className={className}
        container={container}
        dictionary={dictionary}
        lang={lang}
        preOrder={preOrder}
        selectedVariantId={selectedVariantId}
        size={size}
        variant={variant}
      />
    </Suspense>
  );
}
