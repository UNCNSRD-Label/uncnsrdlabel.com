import { clsx } from "clsx";
import { sorting } from "lib/constants";
import { Suspense } from "react";
import Logo from "ui/layout/logo";
import Navbar from "ui/layout/navbar";
import NavbarContent from "ui/layout/navbar/content";
import Collections from "ui/layout/search/collections";
import FilterList from "ui/layout/search/filter";
import { PageTransition } from "ui/page-transition";

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
