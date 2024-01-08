"use client";

import { type GetIntlFn } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import { cn, createUrl } from "@uncnsrdlabel/lib";
import { useRouter, useSearchParams } from "next/navigation";
import { use } from "react";

export function SearchForm({
  className,
  getIntl,
  isOpen,
  setSearchIsOpen,
}: {
  className?: string;
  getIntl: GetIntlFn;
  isOpen: boolean;
  setSearchIsOpen: (open: boolean) => void;
}) {
  const lang = state$.lang.get();

  const intl = use(getIntl(lang, "component.SearchForm"));

  const router = useRouter();

  const searchParams = useSearchParams();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const val = event.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));

    setTimeout(() => setSearchIsOpen(false), 1_000);
  }

  return (
    <form
      className={cn("relative m-0 flex items-center p-0", className)}
      id="search-form"
      onBlur={() => setSearchIsOpen(false)}
      onSubmit={onSubmit}
      tabIndex={-1}
    >
      <input
        autoComplete="on"
        className={cn(
          "w-full border-x-0 border-b border-t-0 border-inherit bg-transparent px-4 py-2 pr-8 transition-all placeholder:text-inherit",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        defaultValue={searchParams?.get("q") || ""}
        name="search"
        onFocus={() => setSearchIsOpen(true)}
        placeholder={intl.formatMessage({ id: "placeholder" })}
        tabIndex={0}
        type="text"
      />
    </form>
  );
}
