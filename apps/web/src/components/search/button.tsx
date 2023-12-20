import { getIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { cn } from "@uncnsrdlabel/lib";
import { SlMagnifier } from "react-icons/sl";

export async function SearchButton({ isOpen }: { isOpen: boolean }) {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, "component.SearchButton");

  return (
    <Button
      aria-label={intl.formatMessage({ id: "submit" })}
      className={cn("btn absolute right-2", isOpen ?? "open")}
      data-testid="submit-search"
      form="search-form"
      variant="ghost"
    >
      <SlMagnifier className="icon fill h-5 w-5 drop-shadow" />
    </Button>
  );
}
