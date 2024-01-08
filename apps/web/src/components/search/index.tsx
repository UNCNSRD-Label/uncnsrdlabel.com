"use client";

import { SearchButton } from "@/components/search/button";
import { SearchForm } from "@/components/search/form";
import { type GetIntlFn } from "@/lib/i18n/server";
import { Suspense, useState } from "react";

export function Search({ getIntl }: { getIntl: GetIntlFn; }) {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div className="relative grid w-full items-center" tabIndex={-1}>
      <Suspense fallback={null}>
        <SearchForm getIntl={getIntl} isOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen} />
      </Suspense>
      <SearchButton isOpen={searchIsOpen} />
    </div>
  );
}
