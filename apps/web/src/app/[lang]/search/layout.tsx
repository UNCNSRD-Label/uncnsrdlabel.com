import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
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
  const messages: ResolvedIntlConfig["messages"] = await getDictionary({ lang });

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <>
      <Navbar className="z-50" offset sticky>
        <NavbarContent lang={lang} />
      </Navbar>
      <div className="relative z-40 mx-auto flex min-h-[100dvh] w-full flex-col justify-center bg-white px-2 pb-48 pt-20 sm:px-4 md:flex-row">
        <Collections
          className={cn("flex-none md:w-1/6", {
            hidden:
              process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !==
              "true",
          })}
        />
        <FilterList
          className={cn("flex-none md:w-1/6", {
            hidden:
              process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !==
              "true",
          })}
          list={productCollectionSorting}
          title={intl.formatMessage({ id: "component.SearchLayout.title" })}
        />
        {children}
      </div>
      <Logo className="bottom-20" />
    </>
  );
}
