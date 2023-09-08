import { getIntl } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import { cn } from "@uncnsrdlabel/lib";
import { use } from "react";

export const Banner = ({ className }: { className?: string }) => {
  const lang = state$.lang.get();

  const intl = use(getIntl(lang, "component.Banner"));

  return (
    <div
      className={cn(
        "grid snap-start place-content-center bg-hotPink p-7 uppercase text-light",
        className,
      )}
    >
      <a href="/shop">{intl.formatMessage({ id: "link" })}</a>
    </div>
  );
};
