"use client";

import { useState } from "react";

import { SearchButton } from "@uncnsrdlabel/ui/components/search/button.js";
import { SearchForm } from "@uncnsrdlabel/ui/components/search/form.js";

export function Search() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div className="relative grid w-full items-center" tabIndex={-1}>
      <SearchForm isOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen} />
      <SearchButton isOpen={searchIsOpen} />
    </div>
  );
}
