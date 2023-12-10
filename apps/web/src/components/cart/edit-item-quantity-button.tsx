import { updateItemQuantity } from "@/components/cart/actions";
import { LoadingDots } from "@/components/loading/dots";
import { getIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  type CartLine,
  type CartLineCost,
  type ComponentizableCartLine,
  type Merchandise,
} from "@shopify/hydrogen/storefront-api-types";
import { cn } from "@uncnsrdlabel/lib";
import { useFormState, useFormStatus } from 'react-dom';

async function SubmitButton({ type }: { type: 'plus' | 'minus' }) {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, "component.SignUp");

  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label={type === 'plus' ? intl.formatMessage({ id: "increase" }) : intl.formatMessage({ id: "decrease" })}
      aria-disabled={pending}
      className={cn(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'cursor-not-allowed': pending,
          'ml-auto': type === 'minus'
        }
      )}
    >
      {pending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === 'plus' ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}


export function EditItemQuantityButton({ item, type }: {   item: Pick<ComponentizableCartLine | CartLine, "id" | "quantity"> & {
  cost: Pick<CartLineCost, "totalAmount">;
  merchandise: Pick<Merchandise, "id">;
}; type: 'plus' | 'minus' }) {
  const [message, formAction] = useFormState(updateItemQuantity, null);
  const payload = {
    lineId: item.id,
    variantId: item.merchandise.id,
    quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
  };
  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form action={actionWithVariant}>
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}