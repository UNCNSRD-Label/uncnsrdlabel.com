import { Logo } from "@/components/layout/logo";
import { Navbar } from "@/components/layout/navbar";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Collections } from "@/components/layout/search/collections";
import { FilterList } from "@/components/layout/search/filter";
import { PageTransition } from "@/components/page-transition";
import { sorting } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar sticky>
        <NavbarContent />
      </Navbar>
      <Suspense>
        <PageTransition>
          <div className="mx-auto flex w-full flex-col justify-center py-6 pb-48 md:flex-row">
            <div
              className={cn(
                "order-first flex-none md:w-1/6",
                process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !== "true" && "hidden",
              )}
            >
              <Collections />
            </div>
            <div className="order-last w-full max-w-7xl px-4 md:order-none">
              {children}
            </div>
            <div
              className={cn(
                "order-none md:order-last md:w-1/6 md:flex-none",
                process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !== "true" && "hidden",
              )}
            >
              <FilterList list={sorting} title="Sort by" />
            </div>
          </div>
        </PageTransition>
        <Logo className="bottom-20" />
      </Suspense>
    </>
  );
}
