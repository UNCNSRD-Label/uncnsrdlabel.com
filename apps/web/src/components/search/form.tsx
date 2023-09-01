import { cn } from "@uncnsrdlabel/lib/classname.js";
import { createUrl } from "@uncnsrdlabel/lib/url";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchForm({
  isOpen,
  setSearchIsOpen,
}: {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setSearchIsOpen: (open: boolean) => void;
}) {
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
      className={cn("relative m-0 flex items-center p-0")}
      id="search-form"
      // onBlur={() => setSearchIsOpen(false)}
      onSubmit={onSubmit}
      tabIndex={-1}
    >
      <input
        autoComplete="off"
        className={cn(
          "w-full border-x-0 border-b border-t-0 border-inherit bg-transparent px-4 py-2 pr-8 transition-all placeholder:text-inherit",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        defaultValue={searchParams?.get("q") || ""}
        name="search"
        onFocus={() => setSearchIsOpen(true)}
        placeholder="Search for products..."
        tabIndex={0}
        type="text"
      />
    </form>
  );
}
