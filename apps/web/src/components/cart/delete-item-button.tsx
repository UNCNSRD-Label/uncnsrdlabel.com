"use client";

import { LoadingDots } from "@/components/loading/dots";
import { useGetIntl } from "@/lib/i18n";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  type CartLine,
  type CartLineCost,
  type ComponentizableCartLine,
  type Merchandise,
} from "@shopify/hydrogen/storefront-api-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@uncnsrdlabel/components/ui/button";
import {
  getCartQuery,
  getQueryKey,
  getShopifyGraphQL,
  removeFromCartMutation,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export function DeleteItemButton({
  cartId,
  item,
}: {
  cartId: string;
  item: Pick<ComponentizableCartLine | CartLine, "id" | "quantity"> & {
    cost: Pick<CartLineCost, "totalAmount">;
    merchandise: Pick<Merchandise, "id">;
  };
}) {
  const intl = useGetIntl("component.DeleteItemButton");

  const payload = item.id;

  const shopifyQueryClient = useQueryClient();

  const { isPending, mutate, status } = useMutation({
    mutationFn: (variables: { cartId: string; lineIds: string[] }) =>
      getShopifyGraphQL(removeFromCartMutation, variables),
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
      aria-label={intl.formatMessage({ id: "remove" })}
      aria-disabled={isPending}
      className={cn(
        "ease flex h-4 w-4 items-center justify-center rounded-full bg-neutral-500 transition-all duration-200",
        {
          "cursor-not-allowed": isPending,
        },
      )}
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (isPending) e.preventDefault();

        mutate({
          cartId,
          lineIds: [payload],
        });
      }}
      variant="ghost"
    >
      {isPending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : (
        <XMarkIcon className="hover:text-accent-3 mx-0.5 h-4 w-4 text-white dark:text-black" />
      )}
      <span aria-live="polite" className="sr-only" role="status">
        {status}
      </span>
    </Button>
  );
}
