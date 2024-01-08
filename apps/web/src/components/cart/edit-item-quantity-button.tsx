"use client";

import { LoadingDots } from "@/components/loading/dots";
import { type GetIntlFn } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
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
import { use } from "react";

export function EditItemQuantityButton({
  cartId,
  className,
  getIntl,
  item,
  type,
}: {
  cartId: string;
  className?: string;
  getIntl: GetIntlFn;
  item: Pick<ComponentizableCartLine | CartLine, "id" | "quantity"> & {
    cost: Pick<CartLineCost, "totalAmount">;
    merchandise: Pick<Merchandise, "id">;
  };
  type: "plus" | "minus";
}) {
  const lang = state$.lang.get();

  const intl = use(getIntl(lang, "component.EditItemQuantityButton"));

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
          ? intl.formatMessage({ id: "increase" })
          : intl.formatMessage({ id: "decrease" })
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
        <LoadingDots className="bg-black dark:bg-white" />
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
