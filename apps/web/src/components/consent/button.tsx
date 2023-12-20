import { getIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { Button } from "@uncnsrdlabel/components/ui/button";

export async function ConsentButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, "component.ConsentDialog");

  return (
    <Button className={className} onClick={onClick}>
      {intl.formatMessage({ id: "trigger" })}
    </Button>
  );
}
