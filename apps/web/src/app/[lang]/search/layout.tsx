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
      <Navbar offset sticky>
        <NavbarContent />
      </Navbar>
      <Suspense fallback={<LoadingDots />}>
        <div className="mx-auto flex min-h-[100dvh] w-full flex-col justify-center pt-14 pb-48 md:flex-row bg-white relative">
          <div
            className={cn(
              "order-first flex-none md:w-1/6",
              process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !==
                "true" && "hidden",
            )}
          >
            <Collections />
          </div>
          <main className="order-last w-full max-w-7xl px-4 md:order-none">
            {children}
          </main>
          <div
            className={cn(
              "order-none md:order-last md:w-1/6 md:flex-none",
              process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !==
                "true" && "hidden",
            )}
          >
            <FilterList list={productCollectionSorting} title={intl.formatMessage({ id: "title" })} />
          </div>
        </div>
        <Logo className="bottom-20" />
      </Suspense>
    </>
  );
}
