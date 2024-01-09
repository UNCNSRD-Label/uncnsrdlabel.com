import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { Collections } from "@/components/layout/search/collections";
import { FilterList } from "@/components/layout/search/filter/index";
import { state$ } from "@/lib/store";
import { productCollectionSorting } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const intl = state$.intl.get();

  return (
    <>
      <Navbar className="z-50" offset sticky>
        <NavbarContent />
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
