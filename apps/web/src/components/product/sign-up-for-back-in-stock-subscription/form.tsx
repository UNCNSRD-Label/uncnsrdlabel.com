"use client";

import { signUpForBackInStockSubscriptionAction } from "@/components/product/sign-up-for-back-in-stock-subscription/action";
import { getProductVariantBySelectedOptionsUtility } from "@/lib/shopify";
import { createIntl } from "@formatjs/intl";
import { useDebouncedEffect } from "@react-hookz/web";
import { getShopifyCookies } from "@shopify/hydrogen-react";
import { type ProductOption } from "@shopify/hydrogen/storefront-api-types";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { SlEnvolope } from "react-icons/sl";
import { type ResolvedIntlConfig } from "react-intl";
import { toast } from "sonner";

function Submit({
  className,
  dictionary,
  lang,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending} variant="ghost">
      {intl.formatMessage({
        id: "component.SignUpForBackInStockSubscriptionForm.submit",
      })}
    </Button>
  );
}

export function SignUpForBackInStockSubscriptionForm({
  className,
  dictionary,
  handle,
  lang,
  options,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  handle: string;
  lang: Intl.BCP47LanguageTag;
  options: ProductOption[];
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const [state, signUpForBackInStockSubscription] = useFormState(signUpForBackInStockSubscriptionAction, null);

  const hasError = (state && state.status > 299) ?? false;

  useDebouncedEffect(
    () => {
      if (hasError) {
        toast.error(
          intl.formatMessage({
            id: "component.SignUpForBackInStockSubscriptionForm.toast.error",
          }),
          {
            description: intl.formatMessage({ id: state?.messageKey }),
          },
        );
      }
    },
    [hasError, state?.messageKey],
    200,
    500,
  );

  useDebouncedEffect(
    () => {
      if (state?.ok) {
        toast.success(
          intl.formatMessage({
            id: "component.SignUpForBackInStockSubscriptionForm.toast.success",
          }),
          {
            description: intl.formatMessage({ id: state?.messageKey }),
          },
        );
      }
    },
    [state?.ok],
    200,
    500,
  );

  const data = getProductVariantBySelectedOptionsUtility({
    handle,
    lang,
    options,
  });

  const variantId = data.product?.variantBySelectedOptions?.id;

  let _shopify_y = undefined;

  if (typeof window !== "undefined") {
    const shopifyCookies = getShopifyCookies(document.cookie);

    _shopify_y = shopifyCookies._shopify_y;
  }

  return (
    <form action={signUpForBackInStockSubscription} className={cn("grid gap-4", className)}>
      <div className="field">
        <input
          aria-invalid={hasError ? "true" : "false"}
          autoComplete="on"
          className={cn("w-full px-4 py-2 placeholder:text-inherit", {
            "border-red-500": hasError,
          })}
          name="email"
          placeholder={intl.formatMessage({
            id: "component.SignUpForBackInStockSubscriptionForm.placeholder",
          })}
          type="email"
        />
        <Button
          aria-label={intl.formatMessage({
            id: "component.SignUpForBackInStockSubscriptionForm.submit",
          })}
          className="btn absolute right-0 mr-3"
          variant="ghost"
        >
          <SlEnvolope />
        </Button>
      </div>
      <input type="hidden" name="lang" value={lang} />
      <input type="hidden" name="variant_id" value={variantId} />
      <input type="hidden" name="_shopify_y" value={_shopify_y} />
      <Submit
        className="btn btn-primary btn-solid btn-sm justify-self-end !no-underline"
        dictionary={dictionary}
        lang={lang}
      />
    </form>
  );
}
