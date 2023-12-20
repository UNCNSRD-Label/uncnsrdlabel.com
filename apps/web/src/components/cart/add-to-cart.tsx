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
  const intl = useGetIntl("component.AddToCart");

  const { pending } = useFormStatus();

  const buttonClasses =
    "btn btn-bg btn-primary btn-lg relative w-full justify-center";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  if (!availableForSale) {
    return (
      <Button
        aria-disabled
        className={cn(buttonClasses, disabledClasses, className)}
      >
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
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
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
    >
      <div className="absolute left-0 ml-4">
        {pending ? (
          <LoadingDots className="mb-3" />
        ) : (
          <PlusIcon className="h-5" />
        )}
      </div>
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
