import { getDictionary } from "@/lib/dictionary";
import { state$ } from "@/lib/store";
import { Button } from "@uncnsrdlabel/components/ui/button";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function ConsentButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  const lang = state$.lang.get();

  const messages: ResolvedIntlConfig["messages"] = await getDictionary({ lang });

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <Button className={className} onClick={onClick} variant="ghost">
      {intl.formatMessage({ id: "component.ConsentDialog.trigger" })}
    </Button>
  );
}
