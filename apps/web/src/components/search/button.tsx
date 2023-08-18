import { SlMagnifier } from "react-icons/sl";

export function SearchButton({ isOpen }: { isOpen: boolean }) {
  return (
    <button
      aria-label="Submit search"
      className={cn("btn absolute right-2", isOpen ?? "open")}
      data-testid="submit-search"
      form="search-form"
    >
      <SlMagnifier className="icon fill h-5 w-5 drop-shadow" />
    </button>
  );
}
