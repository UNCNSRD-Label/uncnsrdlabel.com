"use client";

import { useState } from "react";

import { SearchButton } from "@/components/search/button";
import { SearchForm } from "@/components/search/form";

export function Search() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div className="relative grid w-full items-center" tabIndex={-1}>
      <SearchForm isOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen} />
      <SearchButton isOpen={searchIsOpen} />
    </div>
  );
}
