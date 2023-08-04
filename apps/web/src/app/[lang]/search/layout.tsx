import { sorting } from "@uncnsrdlabel/lib/constants";
import { Logo } from "@uncnsrdlabel/ui/components/layout/logo";
import { Navbar } from "@uncnsrdlabel/ui/components/layout/navbar";
import { NavbarContent } from "@uncnsrdlabel/ui/components/layout/navbar/content";
import { Collections } from "@uncnsrdlabel/ui/components/layout/search/collections";
import { FilterList } from "@uncnsrdlabel/ui/components/layout/search/filter";
import { PageTransition } from "@uncnsrdlabel/ui/components/page-transition";
import { clsx } from "clsx";
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
              className={clsx(
                "order-first flex-none md:w-1/6",
                !process.env.FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE && "hidden",
              )}
            >
              <Collections />
            </div>
            <div className="order-last w-full max-w-7xl px-4 md:order-none">
              {children}
            </div>
            <div
              className={clsx(
                "order-none md:order-last md:w-1/6 md:flex-none",
                !process.env.FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE && "hidden",
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
