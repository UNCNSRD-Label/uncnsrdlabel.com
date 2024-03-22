import { LoadingDots } from "@/components/loading/dots";
import { SignUpForBackInStockSubscriptionForm } from "@/components/product/sign-up-for-back-in-stock-subscription/form";
import { getDictionary } from "@/lib/dictionary";
import { type ProductOption } from "@shopify/hydrogen/storefront-api-types";
import {
    productDetailsFragment,
    type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function SignUpForBackInStockSubscription({
  className,
  handle,
  lang,
  options,
}: {
  className?: string;
  handle: string;
  lang: Navigator['language'];
  options: ProductOption[];
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <section className={cn("grid gap-4", className)}>
      <h3 className="text-sm uppercase">
        {intl.formatMessage({ id: "component.SignUpForBackInStockSubscription.title" })}
      </h3>
      <span className="text-xs">
        {intl.formatMessage({ id: "component.SignUpForBackInStockSubscription.summary" })}
      </span>
      <Suspense fallback={<LoadingDots />}>
        <SignUpForBackInStockSubscriptionForm
          dictionary={dictionary}
          handle={handle}
          lang={lang}
          options={options}
        />
      </Suspense>
    </section>
  );
}
