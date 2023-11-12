import {
  ProductOption
} from "@shopify/hydrogen/storefront-api-types";
import { cn } from "@uncnsrdlabel/lib";

export function VariantSelectorShell({
  options,
}: {
  options: ProductOption[];
}) {
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  return (
    <>
      {options.map((option) => (
        <dl className="mb-3 md:mb-6" key={option.id}>
          <dt className="mb-2 text-sm uppercase">{option.name}</dt>
          <dd className="flex flex-wrap gap-3">
            {option.values.map((value) => {
              return (
                <button
                  key={value}
                  aria-disabled={true}
                  disabled={true}
                  className={cn(
                    "focus-visible:bg-hotPink/20 focus-visible:ring-hotPink flex h-12 min-w-[48px] items-center justify-center px-2 text-sm",
                    "hover:text-dark focus-visible:text-dark",
                    "relative z-10 cursor-not-allowed overflow-hidden before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-gray-500 before:transition-transform",
                  )}
                >
                  {value}
                </button>
              );
            })}
          </dd>
        </dl>
      ))}
    </>
  );
}
