import { cn } from "@uncnsrdlabel/lib";
import { SlMagnifier } from "react-icons/sl";

export function SearchButton({ isOpen, onClick, type, setSearchIsOpen }: { isOpen: boolean, onClick: ()=> void, type: "button" | "submit", setSearchIsOpen: (isOpened: boolean)=> void }) {
  return (
    <button
      aria-label={isOpen? "Open search": "Submit search"}
      className={cn("btn absolute right-2", isOpen ?? "open")}
      data-testid="submit-search"
      form="search-form"
      type={type}
      onClick={onClick}
      tabIndex={1}
      onFocus={()=> {
        setSearchIsOpen(true);
      }}
    >
      <SlMagnifier className="icon fill h-5 w-5 drop-shadow" />
    </button>
  );
}
