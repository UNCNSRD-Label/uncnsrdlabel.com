"use client";

import { SearchIcon } from "@/components/icons/search";
import { getIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { createUrl } from "@uncnsrdlabel/lib";
import { useRouter, useSearchParams } from "next/navigation";

export async function NavbarSearch() {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, "component.SearchLayout");

  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        type="text"
        name="search"
        placeholder={intl.formatMessage({ id: "placeholder" })}
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="focus:inherit w-full bg-gray-800/50 px-4 py-2 placeholder:text-inherit"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <SearchIcon className="h-5" />
      </div>
    </form>
  );
}
