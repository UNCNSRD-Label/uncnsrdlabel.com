import { cn } from "@uncnsrdlabel/lib";
import { SlBag } from "react-icons/sl";

export function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center">
      <SlBag
        className={cn(
          "icon fill h-5 w-5 transition-all ease-in-out",
          className,
        )}
      />

      <span
        aria-live="polite"
        className={cn(
          "bg-hotPink absolute right-0 top-0 -mr-1.5 -mt-2 h-4 w-4 rounded text-[11px] font-medium text-inherit sm:-mr-2",
          {
            "opacity-0": !quantity,
          },
        )}
        role="status"
      >
        {quantity}
      </span>
    </div>
  );
}
