import clsx from "clsx";
import Navbar from "components/layout/navbar";
import NavbarContent from "components/layout/navbar/content";
import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import { sorting } from "lib/constants";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar blend sticky>
        <NavbarContent showLogo />
      </Navbar>
      <Suspense>
        <div className="mx-auto flex w-full flex-col justify-center py-6 pb-28 md:flex-row">
          <div
            className={clsx(
              "order-first flex-none md:w-1/6",
              !process.env.FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE && "hidden"
            )}
          >
            <Collections />
          </div>
          <div className="order-last min-h-screen w-full max-w-7xl px-4 md:order-none">
            {children}
          </div>
          <div
            className={clsx(
              "order-none md:order-last md:w-1/6 md:flex-none",
              !process.env.FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE && "hidden"
            )}
          >
            <FilterList list={sorting} title="Sort by" />
          </div>
        </div>
      </Suspense>
    </>
  );
}
