"use client";

import { addItem } from "@/components/cart/actions";
import { LoadingDots } from "@/components/loading/dots";
import { useGetIntl } from "@/lib/i18n";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  type ProductOption,
  type ProductVariant,
} from "@shopify/hydrogen/storefront-api-types";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { cn } from "@uncnsrdlabel/lib";
import { useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton({
  availableForSale,
  className,
  selectedVariantId,
}: {
  availableForSale: boolean;
  className?: string;
  selectedVariantId: string | undefined;
}) {
  const { pending } = useFormStatus();
  const intl = useGetIntl("component.AddToCart");
  const buttonClasses = cn("relative w-full justify-start py-4 text-xs grid grid-flow-col items-center gap-4");
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  if (!availableForSale) {
    return (
      <Button aria-disabled className={cn(buttonClasses, disabledClasses, className)} variant="ghost">
        {intl.formatMessage({ id: "out-of-stock" })}
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        aria-label={intl.formatMessage({ id: "select-options" })}
        aria-disabled
        className={cn(buttonClasses, disabledClasses)}
        variant="ghost"
      >
        <PlusIcon className="h-5" />
        {intl.formatMessage({ id: "select-options" })}
      </Button>
    );
  }

  return (
    <Button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label={intl.formatMessage({ id: "add-to-cart-enabled" })}
      aria-disabled={pending}
      className={cn(buttonClasses, {
        "hover:opacity-90": true,
        disabledClasses: pending,
      })}
      variant="ghost"
    >
      {pending ? (
        <LoadingDots className="mb-3 bg-white" />
      ) : (
        <PlusIcon className="h-5" />
      )}
      {intl.formatMessage({ id: "add-to-cart-enabled" })}
    </Button>
  );
}

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
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants[0]?.id;
  const variant = variants.find(
    (variant) =>
      variant.selectedOptions?.every((selectedOption) => {
        const hasNoOptionsOrJustOneOption =
          !options.length ||
          options.find((option) => option.name === selectedOption.name)?.values
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
  const selectedVariantId = variant?.id ?? defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton
        availableForSale={availableForSale}
        className={className}
        selectedVariantId={selectedVariantId}
      />
      <span aria-live="polite" className="sr-only" role="status">
        {message}
      </span>
    </form>
  );
}