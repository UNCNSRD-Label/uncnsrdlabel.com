"use client";

import { LoadingDots } from "@/components/loading/dots";
import { createIntl } from "@formatjs/intl";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  type CartLine,
  type CartLineCost,
  type CartLineUpdateInput,
  type ComponentizableCartLine,
  type Merchandise,
} from "@shopify/hydrogen/storefront-api-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/ui/button";
import {
  editCartItemsMutation,
  getCartQuery,
  getQueryKey,
  getShopifyGraphQL,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function EditItemQuantityButton({
  cartId,
  className,
  dictionary,
  item,
  lang,
  type,
}: {
  cartId: string;
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  item: Pick<ComponentizableCartLine | CartLine, "id" | "quantity"> & {
    cost: Pick<CartLineCost, "totalAmount">;
    merchandise: Pick<Merchandise, "id">;
  };
  lang: Intl.BCP47LanguageTag;
  type: "plus" | "minus";
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const payload = {
    id: item.id,
    merchandiseId: item.merchandise.id,
    quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
  } satisfies CartLineUpdateInput;

  const shopifyQueryClient = useQueryClient();

  const { isPending, mutate, status } = useMutation({
    mutationFn: (variables: { cartId: string; lines: CartLineUpdateInput[] }) =>
      getShopifyGraphQL(editCartItemsMutation, variables),
    onSuccess: () => {
      const queryKey = getQueryKey(getCartQuery, {
        cartId,
      });

      shopifyQueryClient.invalidateQueries({
        queryKey,
      });
    },
  });

  return (
    <Button
      aria-label={
        type === "plus"
          ? intl.formatMessage({ id: "component.EditItemQuantityButton.increase" })
          : intl.formatMessage({ id: "component.EditItemQuantityButton.decrease" })
      }
      aria-disabled={isPending}
      className={cn(className, {
        "cursor-not-allowed": isPending,
        "ml-auto": type === "minus",
      })}
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (isPending) e.preventDefault();

        mutate({
          cartId,
          lines: [payload],
        });
      }}
      variant="ghost"
    >
      {isPending ? (
        <LoadingDots />
      ) : type === "plus" ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
      <span aria-live="polite" className="sr-only" role="status">
        {status}
      </span>
    </Button>
  );
}
