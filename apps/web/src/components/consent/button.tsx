import { getIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";

export async function Button({ className, onClick }: { className?: string; onClick?: () => void }) {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, "component.ConsentDialog");

  return (
    <button className={className} onClick={onClick}>
      {intl.formatMessage({ id: "trigger" })}
    </button>
  );
}
