import { useIntl } from "@/dictionaries";
import { clsx } from "clsx";

export const Banner = async ({ className }: { className?: string }) => {
  const intl = await useIntl("component.Banner");

  return (
    <div
      className={clsx(
        "grid snap-start place-content-center bg-hotPink p-7 uppercase text-light",
        className,
      )}
    >
      <a href="/shop">{intl.formatMessage({ id: "link" })}</a>
    </div>
  );
};
