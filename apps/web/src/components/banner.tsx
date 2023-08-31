import { getIntl } from "@/lib/i18n/server";
import { cn } from "@uncnsrdlabel/lib/classname";
import { use } from "react";

export const Banner = ({ className }: { className?: string }) => {
  const intl = use(getIntl("component.Banner"));

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
