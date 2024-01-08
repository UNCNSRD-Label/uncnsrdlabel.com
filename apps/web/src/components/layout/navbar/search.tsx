"use client";

import { SearchIcon } from "@/components/icons/search";
import { type GetIntlFn } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { cn, createUrl } from "@uncnsrdlabel/lib";
import { useRouter, useSearchParams } from "next/navigation";
import { use } from "react";
import { useTrack } from "use-analytics";

export function NavbarSearch({ className, getIntl }: { className?: string; getIntl: GetIntlFn; }) {
  const lang = state$.lang.get();

  const intl = use(getIntl(lang, "component.NavbarSearch"));

  const router = useRouter();

  const searchParams = useSearchParams();

  const track = useTrack();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const val = event.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    const { dataset } = event.currentTarget;

    const { value } = search

    track("search", {
      ...dataset,
      value,
    });

    if (value) {
      newParams.set("q", value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  }

  return (
    <form onSubmit={onSubmit} className={cn("relative", className)}>
      <input
        autoComplete="on"
        className="focus:inherit w-full bg-gray-800/50 px-4 py-2 placeholder:text-inherit"
        defaultValue={searchParams?.get("q") || ""}
        name="search"
        placeholder={intl.formatMessage({ id: "placeholder" })}
        type="text"
      />
      <Button className="absolute right-0 top-0 mr-3 flex h-full items-center" variant="ghost">
        <SearchIcon className="h-5" />
      </Button>
    </form>
  );
}
