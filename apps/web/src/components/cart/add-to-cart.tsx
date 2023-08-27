"use client";

import { addItem } from "@/components/cart/actions";
import { LoadingDots } from "@/components/loading-dots";
import { PlusIcon } from "@heroicons/react/24/outline";
import { AddToCartButton } from "@shopify/hydrogen-react";
import { ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import { cn } from "@uncnsrdlabel/lib";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { type PartialDeep } from "type-fest";

export function AddToCart({
  variants,
  availableForSale,
}: {
  variants: PartialDeep<
  ProductVariant,
  {
    recurseIntoArrays: true;
  }
>[];
  availableForSale: boolean;
}) {
  const [selectedVariantId, setSelectedVariantId] = useState<
    string | undefined
  >(undefined);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending,
    startTransition
  ] = useTransition();

  useEffect(() => {
    const variant = variants.find((variant: ProductVariant) =>
      variant.selectedOptions.every(
        (option) =>
          option.value === searchParams.get(option.name.toLowerCase()),
      ),
    );

    setSelectedVariantId(variant?.id);
  }, [searchParams, variants, setSelectedVariantId]);

  const title = !availableForSale
    ? "Out of stock"
    : !selectedVariantId
    ? "Please select options"
    : undefined;

  return (
    <AddToCartButton
      aria-label="Add item to cart"
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
      <span>{availableForSale ? "Add To Cart" : "Out Of Stock"}</span>
    </AddToCartButton>
  );
}
