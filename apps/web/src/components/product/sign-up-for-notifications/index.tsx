import { LoadingDots } from "@/components/loading/dots";
import { SignUpForNotificationsForm } from "@/components/product/sign-up-for-notifications/form";
import { getDictionary } from "@/lib/dictionary";
import { type ProductOption } from "@shopify/hydrogen/storefront-api-types";
import {
  productDetailsFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function SignUpForNotifications({
  className,
  handle,
  lang,
  options,
  productDetailsFragmentRef,
}: {
  className?: string;
  handle: string;
  lang: Intl.BCP47LanguageTag;
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
        {intl.formatMessage({ id: "component.SignUpForNotifications.title" })}
      </h3>
      <span className="text-xs">
        {intl.formatMessage({ id: "component.SignUpForNotifications.summary" })}
      </span>
      <Suspense fallback={<LoadingDots />}>
        <SignUpForNotificationsForm
          dictionary={dictionary}
          handle={handle}
          lang={lang}
          options={options}
          productDetailsFragmentRef={productDetailsFragmentRef}
        />
      </Suspense>
    </section>
  );
}
