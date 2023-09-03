import { Image } from "@/components/image";
import { Price } from "@/components/price";
import { cn } from "@uncnsrdlabel/lib";

export function GridTileImage({
  className,
  isInteractive = true,
  // background = "hotPink",
  active,
  labels,
  priority,
  ...props
}: {
  className?: string;
  isInteractive?: boolean;
  background?:
    | "hotPink"
    | "white"
    | "pink"
    | "purple"
    | "black"
    | "purple-dark"
    | "blue"
    | "cyan"
    | "gray";
  active?: boolean;
  labels?: {
    title: string;
    amount?: string;
    currencyCode?: string;
  };
  priority?: boolean;
} & React.ComponentProps<typeof Image>) {
  return (
    <>
      {props.src ? (
        <figure
          className={cn(
            "relative aspect-3/4 w-full overflow-hidden mb-4",
            // {
            //   "bg-hotPink dark:bg-hotPink": background === "hotPink",
            //   "bg-white dark:bg-white": background === "white",
            //   "bg-[#ff0080] dark:bg-[#ff0080]": background === "pink",
            //   "bg-[#7928ca] dark:bg-[#7928ca]": background === "purple",
            //   "bg-gray-900 dark:bg-gray-900": background === "black",
            //   "bg-violetDark dark:bg-violetDark": background === "purple-dark",
            //   "bg-blue-500 dark:bg-blue-500": background === "blue",
            //   "bg-cyan-500 dark:bg-cyan-500": background === "cyan",
            //   "bg-gray-100 dark:bg-gray-100": background === "gray",
            //   "bg-gray-100 dark:bg-gray-900": !background,
            // }
          )}
        >
          <Image
            className={cn(
              "relative h-full w-full object-cover",
              {
                "transition hover:scale-105": isInteractive,
              },
              className,
            )}
            {...props}
            alt={props.title || ""}
            fill
            height={undefined}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            width={undefined}
          />
        </figure>
      ) : null}
      {labels?.amount && labels?.currencyCode ? (
        <div>
          <h3
            data-testid="product-name"
            className={cn(
              "box-decoration-clone text-xs mb-2",
            )}
          >
            {labels.title}
          </h3>
          <Price
            className="text-xs"
            amount={labels.amount}
            currencyCode={labels.currencyCode}
          />
        </div>
      ) : null}
    </>
  );
}
