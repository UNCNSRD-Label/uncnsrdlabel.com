"use client";

import { SearchButton } from "@/components/search/button";
import { SearchForm } from "@/components/search/form";
import { getDictionary } from "@/lib/dictionary";
import { useState } from "react";

export function Search({
  dictionary,
  lang,
}: {
  dictionary: ReturnType<typeof getDictionary>;
  lang: Intl.BCP47LanguageTag;
}) {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <>
      <SearchForm
        dictionary={dictionary}
        isOpen={searchIsOpen}
        lang={lang}
        setSearchIsOpen={setSearchIsOpen}
      />
      <SearchButton dictionary={dictionary} isOpen={searchIsOpen} lang={lang} />
    </>
  );
}
