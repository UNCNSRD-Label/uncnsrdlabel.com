import { getDictionary } from "@/lib/dictionary";
import { state$ } from "@/lib/store";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { cn } from "@uncnsrdlabel/lib";
import { SlMagnifier } from "react-icons/sl";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function SearchButton({ isOpen }: { isOpen: boolean }) {
  const lang = state$.lang.get();

  const messages: ResolvedIntlConfig["messages"] = await getDictionary({ lang });

  const intl = createIntl({
    locale: lang,
    messages,
  });

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
