import { getIntl } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { cn } from "@uncnsrdlabel/lib";
import { use } from "react";

export const Banner = ({ className }: { className?: string }) => {
  const lang = state$.lang.get();

  const intl = use(getIntl(lang, "component.Banner"));

  return (
    <div
      className={cn(
        "bg-hotPink text-light grid snap-start place-content-center p-7 uppercase",
        className,
      )}
    >
      <Link href="/shop">{intl.formatMessage({ id: "link" })}</Link>
    </div>
  );
};
