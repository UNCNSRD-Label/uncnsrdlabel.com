import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { Collections } from "@/components/layout/search/collections";
import { FilterList } from "@/components/layout/search/filter/index";
import { LoadingDots } from "@/components/loading/dots";
import { getIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { productCollectionSorting } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, "component.SearchLayout");

  return (
    <>
      <Navbar className="z-50" offset sticky>
        <NavbarContent />
      </Navbar>
      <Suspense fallback={<LoadingDots />}>
        <div className="bg-white flex flex-col md:flex-row justify-center relative mx-auto px-2 sm:px-4 min-h-[100dvh] pb-48 pt-20 w-full z-40">
          <Collections
            className={cn("flex-none md:w-1/6", {
              hidden:
                process.env
                  .NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !==
                "true",
            })}
          />
          <FilterList
            className={cn("flex-none md:w-1/6", {
              hidden:
                process.env
                  .NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !==
                "true",
            })}
            list={productCollectionSorting}
            title={intl.formatMessage({ id: "title" })}
          />
          {children}
        </div>
        <Logo className="bottom-20" />
      </Suspense>
    </>
  );
}
