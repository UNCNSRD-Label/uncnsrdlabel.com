import { getIntl } from "@/lib/i18n/server";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { cn } from "@uncnsrdlabel/lib";
import { SlMagnifier } from "react-icons/sl";

export async function SearchButton({ isOpen }: { isOpen: boolean }) {
  const intl = getIntl();

  return (
    <Button
      aria-label={intl.formatMessage({ id: "component.SearchButton.submit" })}
      className={cn("btn absolute right-2", isOpen ?? "open")}
      data-testid="submit-search"
      form="search-form"
      variant="ghost"
    >
      <SlMagnifier className="icon fill h-5 w-5 drop-shadow" />
    </Button>
  );
}
