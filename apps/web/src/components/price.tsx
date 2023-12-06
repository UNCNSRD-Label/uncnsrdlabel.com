import { state$ } from "@/lib/store";
import { cn } from "@uncnsrdlabel/lib";

export const Price = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => {
  const lang = state$.lang.get();

  return (
    <p suppressHydrationWarning={true} className={className}>
      {`${new Intl.NumberFormat(lang, {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "narrowSymbol",
      }).format(parseFloat(amount))}`}
      <span
        className={cn("ml-1 inline", currencyCodeClassName)}
      >{`${currencyCode}`}</span>
    </p>
  );
};
