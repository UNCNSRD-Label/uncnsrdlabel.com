"use client";

import { addItem } from "@/components/cart/actions";
import { LoadingDots } from "@/components/loading-dots";
import { useGetIntl } from "@/lib/i18n/client";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  ProductOption,
  ProductVariant,
} from "@shopify/hydrogen/storefront-api-types";
import { cn } from "@uncnsrdlabel/lib";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function AddToCart({
  availableForSale,
  options,
  variants,
}: {
  availableForSale: boolean;
  options: ProductOption[];
  variants: Pick<ProductVariant, "id" | "selectedOptions">[];
}) {
  const [selectedVariantId, setSelectedVariantId] = useState<
    string | undefined
  >(undefined);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const intl = useGetIntl("component.AddToCart");

  useEffect(() => {
    const variant = variants.find(
      (variant) =>
        variant.selectedOptions?.every((selectedOption) => {
          const hasNoOptionsOrJustOneOption =
            options.find((option) => option.name === selectedOption.name)
              ?.values.length === 1;

          if (hasNoOptionsOrJustOneOption) {
            return true;
          }

          const value =
            selectedOption?.value ===
            searchParams.get(selectedOption.name.toLowerCase());

          return value;
        }),
    );

    setSelectedVariantId(variant?.id);
  }, [options, searchParams, variants, setSelectedVariantId]);

  const title = !availableForSale
    ? intl.formatMessage({ id: "out_of_stock" })
    : !selectedVariantId
    ? intl.formatMessage({ id: "select_options" })
    : undefined;

  return (
    <button
      aria-label={
        availableForSale
          ? intl.formatMessage({ id: "add_item_to_cart_enabled" })
          : intl.formatMessage({ id: "add_item_to_cart_disabled" })
      }
      disabled={isPending || !availableForSale || !selectedVariantId}
      title={title}
      onClick={() => {
        // Safeguard in case someone messes with `disabled` in devtools.
        if (!availableForSale || !selectedVariantId) return;

        startTransition(async () => {
          const error = await addItem(selectedVariantId);

          if (error) {
            alert(error);
            return;
          }

          router.refresh();
        });
      }}
      className={cn("btn btn-base btn-primary btn-bg relative w-full", {
        "cursor-not-allowed opacity-60 hover:opacity-60":
          !availableForSale || !selectedVariantId,
        "cursor-not-allowed": isPending,
      })}
    >
      <div className="absolute left-0 ml-4">
        {!isPending ? (
          <PlusIcon className="h-5" />
        ) : (
          <LoadingDots className="mb-3 bg-white" />
        )}
      </div>
      <span>
        {availableForSale
          ? intl.formatMessage({ id: "add_to_cart" })
          : intl.formatMessage({ id: "out_of_stock" })}
      </span>
    </button>
  );
}
