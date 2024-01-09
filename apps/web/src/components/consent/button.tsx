import { state$ } from "@/lib/store";
import { Button } from "@uncnsrdlabel/components/ui/button";

export async function ConsentButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  const intl = state$.intl.get();

  return (
    <Button className={className} onClick={onClick} variant="ghost">
      {intl.formatMessage({ id: "component.ConsentDialog.trigger" })}
    </Button>
  );
}
