"use client";

import { useState } from "react";

import SearchButton from "./button";
import SearchForm from "./form";

export default async function Search() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div className="relative grid w-full items-center" tabIndex={-1}>
      <SearchForm isOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen} />
      <SearchButton isOpen={searchIsOpen} />
    </div>
  );
}
