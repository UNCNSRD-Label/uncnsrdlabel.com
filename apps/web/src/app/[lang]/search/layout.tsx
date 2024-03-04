import { Logo } from "@/components/layout/logo/index";
import { Collections } from "@/components/layout/search/collections";
import { FilterList } from "@/components/layout/search/filter/index";
import { getDictionary } from "@/lib/dictionary";
import { type LayoutProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { productCollectionSorting } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { PropsWithChildren } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export default async function SearchLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <>
      <div className="bg-light relative mx-auto flex min-h-[100dvh] w-full flex-col justify-center pb-32 pt-12 px-2 sm:px-4 sm:pt-12 md:flex-row">
        <Collections
          className={cn("order-1 flex-none md:w-1/6", {
            hidden:
              process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !==
              "true",
          })}
          lang={lang}
        />
        <FilterList
          className={cn("order-3 flex-none md:w-1/6", {
            hidden:
              process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !==
              "true",
          })}
          list={productCollectionSorting}
          title={intl.formatMessage({ id: "component.SearchLayout.title" })}
        />
        {children}
      </div>
      <Logo />
    </>
  );
}
