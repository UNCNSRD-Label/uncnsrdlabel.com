import { cn, createUrl } from "@uncnsrdlabel/lib";
import { useRouter, useSearchParams } from "next/navigation";
import {useGetIntl} from "@/lib/i18n/client";

export function SearchForm({
  isOpen,
  setSearchIsOpen,
  childInputRef,
  setSearchQuery,
  searchQuery,
}: {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setSearchIsOpen: (open: boolean) => void;
  childInputRef: HTMLInputElement;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const intl = useGetIntl("component.Search");

  function onSubmit(event?: React.FormEvent<HTMLFormElement>) {
    if(event){
      event.preventDefault();
    }
    const newParams = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      newParams.set("q", searchQuery);
    } else {
      newParams.delete("q");
    }

    setSearchQuery("");
    setSearchIsOpen(false);
    router.push(createUrl("/search", newParams));
  }

  return (
    <form
      className={cn("relative m-0 flex items-center p-0 justify-end w-full")}
      id="search-form"
      onSubmit={onSubmit}
      tabIndex={-1}
    >
      <input
        autoComplete="off"
        className={cn(
          "w-0 border-x-0 border-b-0 border-t-0 border-inherit bg-transparent px-4 py-2 pr-0 transition-all placeholder:text-inherit",
          "focus:w-full focus:pr-8 focus:border-b focus:bg-white",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        defaultValue={searchParams?.get("q") || ""}
        name="search"
        onBlur={()=> setSearchIsOpen(false)}
        placeholder={intl.formatMessage({ id: "placeholder" })}
        tabIndex={0}
        type="text"
        ref={childInputRef}
        onFocus={()=> {
          setSearchIsOpen(true)
        }}
        onKeyDown={(event)=>{
          if (event.key === "Enter" && searchQuery) {
            event.target.closest('form').submit()
          }
        }}
        value={searchQuery}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
      />
    </form>
  );
}
