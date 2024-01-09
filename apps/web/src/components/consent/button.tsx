import { getIntl } from "@/lib/i18n/server";
import { Button } from "@uncnsrdlabel/components/ui/button";

export async function ConsentButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  const intl = getIntl();

  return (
    <Button className={className} onClick={onClick} variant="ghost">
      {intl.formatMessage({ id: "component.ConsentDialog.trigger" })}
    </Button>
  );
}
