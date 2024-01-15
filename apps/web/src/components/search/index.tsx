"use client";

import { SearchButton } from "@/components/search/button";
import { SearchForm } from "@/components/search/form";
import { getDictionary } from "@/lib/dictionary";
import { Suspense, useState } from "react";

export function Search({ dictionary} : { dictionary: ReturnType<typeof getDictionary> }) {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div className="relative grid w-full items-center" tabIndex={-1}>
      <Suspense fallback={null}>
        <SearchForm dictionary={dictionary} isOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen} />
      </Suspense>
      <SearchButton isOpen={searchIsOpen} />
    </div>
  );
}
