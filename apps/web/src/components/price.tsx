import { cn } from "@uncnsrdlabel/lib";

export const Price = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
  lang
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
  lang: Intl.BCP47LanguageTag;
} & React.ComponentProps<"p">) => {
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
