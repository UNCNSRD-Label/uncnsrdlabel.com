"use client";

import { addItem } from "@/components/cart/actions";
import { LoadingDots } from "@/components/loading/dots";
import { useGetIntl } from "@/lib/i18n/client";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  ProductOption,
  ProductVariant,
} from "@shopify/hydrogen/storefront-api-types";
import { cn } from "@uncnsrdlabel/lib";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const intl = useGetIntl("component.AddToCart");

  const variant = variants.find(
    (variant) =>
      variant.selectedOptions?.every((selectedOption) => {
        const hasNoOptionsOrJustOneOption =
          !options.length ||
          (options.find((option) => option.name === selectedOption.name)?.values.length === 1);

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

  const title = !availableForSale
    ? intl.formatMessage({ id: "out_of_stock" })
    : intl.formatMessage({ id: "add_to_cart_enabled" });

  return (
    <button
      aria-label={
        availableForSale
          ? intl.formatMessage({ id: "add_to_cart_enabled" })
          : intl.formatMessage({ id: "add_to_cart_disabled" })
      }
      disabled={isPending || !availableForSale}
      title={title}
      onClick={() => {
        // Safeguard in case someone messes with `disabled` in devtools.
        if (!availableForSale) return;

        startTransition(async () => {
          const error = await addItem(selectedVariantId);

          if (error) {
            alert(error);
            return;
          }

          router.refresh();
        });
      }}
      className={cn(
        "content-center grid gap-4 grid-flow-col",
        {
          "cursor-not-allowed opacity-60 hover:opacity-60":
            !availableForSale || !selectedVariantId,
          "cursor-not-allowed": isPending,
        },
        className,
      )}
    >
      {!isPending ? (
        <PlusIcon className="h-5" />
      ) : (
        <LoadingDots className="mb-3 bg-white" />
      )}
      <span>
        {title}
      </span>
    </button>
  );
}
