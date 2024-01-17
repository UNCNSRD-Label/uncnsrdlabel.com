"use client";

import { SearchButton } from "@/components/search/button";
import { SearchForm } from "@/components/search/form";
import { getDictionary } from "@/lib/dictionary";
import { Suspense, useState } from "react";

export function Search({
  dictionary,
  lang,
}: {
  dictionary: ReturnType<typeof getDictionary>;
  lang: Intl.BCP47LanguageTag;
}) {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div className="relative grid w-full items-center" tabIndex={-1}>
      <Suspense fallback={null}>
        <SearchForm
          dictionary={dictionary}
          isOpen={searchIsOpen}
          lang={lang}
          setSearchIsOpen={setSearchIsOpen}
        />
      </Suspense>
      <SearchButton isOpen={searchIsOpen} lang={lang} />
    </div>
  );
}
