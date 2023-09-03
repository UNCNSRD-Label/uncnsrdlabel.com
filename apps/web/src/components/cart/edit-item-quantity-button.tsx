import { removeItem, updateItemQuantity } from "@/components/cart/actions";
import { LoadingDots } from "@/components/loading-dots";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { type CartLine, type CartLineCost, type ComponentizableCartLine, type Merchandise } from "@shopify/hydrogen/storefront-api-types";
import { cn } from "@uncnsrdlabel/lib";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function EditItemQuantityButton({
  item,
  type,
}: {
  item: Pick<
    (ComponentizableCartLine | CartLine), "id" | "quantity"
  > & {
    cost: Pick<CartLineCost, "totalAmount">;
    merchandise: Pick<Merchandise, "id">
  };
  type: "plus" | "minus";
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      onClick={() => {
        startTransition(async () => {
          const error =
            type === "minus" && item.quantity - 1 === 0
              ? await removeItem(item.id)
              : await updateItemQuantity({
                  lineId: item.id,
                  variantId: item.merchandise.id,
                  quantity:
                    type === "plus" ? item.quantity + 1 : item.quantity - 1,
                });

          if (error) {
            alert(error);
            return;
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={cn(
        "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
        {
          "cursor-not-allowed": isPending,
          "ml-auto": type === "minus",
        },
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === "plus" ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}
