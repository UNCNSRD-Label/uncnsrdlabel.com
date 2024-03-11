"use client";

import { createIntl } from "@formatjs/intl";
import { cn, createUrl } from "@uncnsrdlabel/lib";
import { useRouter, useSearchParams } from "next/navigation";
import { Usable, use } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { useTrack } from "use-analytics";

export function SearchForm({
  className,
  dictionary,
  isOpen,
  lang,
  setSearchIsOpen,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  isOpen: boolean;
  lang: Intl.BCP47LanguageTag;
  setSearchIsOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const track = useTrack();

  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const val = event.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams?.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    track('search', newParams);

    router.push(createUrl("/search", newParams));

    setTimeout(() => setSearchIsOpen(false), 1_000);
  }

  return (
    <form
      className={cn("relative m-0 flex items-center p-0", className)}
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
        placeholder={intl.formatMessage({ id: "component.SearchForm.placeholder" })}
        tabIndex={0}
        type="text"
      />
    </form>
  );
}
