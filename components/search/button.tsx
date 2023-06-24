import clsx from "clsx";
import { SlMagnifier } from "react-icons/sl";

export default function SearchButton({ isOpen }: { isOpen: boolean }) {
  return (
    <button
      aria-label="Submit search"
      className={clsx("absolute right-2", isOpen ?? "open")}
      data-testid="submit-search"
      form="search-form"
    >
      <SlMagnifier className="icon fill h-5 w-5 drop-shadow" />
    </button>
  );
}
