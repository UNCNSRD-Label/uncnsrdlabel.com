import { XMarkIcon } from "@heroicons/react/24/outline";
import LoadingDots from "@uncnsrdlabel/ui/components/loading-dots";
import { useRouter } from "next/navigation";

import type { CartItem } from "@uncnsrdlabel/lib/shopify/types";
import { removeItem } from "@uncnsrdlabel/ui/components/cart/actions";
import clsx from "clsx";
import { useTransition } from "react";

export function DeleteItemButton({ item }: { item: CartItem }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label="Remove cart item"
      onClick={() => {
        startTransition(async () => {
          const error = await removeItem(item.id);

          if (error) {
            alert(error);
            return;
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={clsx(
        "ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200",
        {
          "cursor-not-allowed px-0": isPending,
        },
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-white" />
      ) : (
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
      )}
    </button>
  );
}