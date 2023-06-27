import clsx from "clsx";
import { SlBag } from "react-icons/sl";

export default function CartIcon({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative">
      <SlBag className={clsx("icon fill h-5 w-5", className)} />
      {quantity ? (
        <div className="absolute bottom-0 left-0 -mb-3 -ml-3 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-black text-xs">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
