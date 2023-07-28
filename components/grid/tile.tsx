import Image from "@/components/image";
import { clsx } from "clsx";

import Price from "@/components/price";

export function GridTileImage({
  className,
  isInteractive = true,
  background = "hotPink",
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
    amount: string;
    currencyCode: string;
    isSmall?: boolean;
  };
  priority?: boolean;
} & React.ComponentProps<typeof Image>) {
  return (
    <>
      {props.src ? (
        <figure
          className={clsx(
            "relative aspect-3/4 w-full overflow-hidden",
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
            className={clsx(
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
      {labels ? (
        <div>
          <h3
            data-testid="product-name"
            className={clsx(
              "box-decoration-clone font-semibold",
              !labels.isSmall ? "text-3xl" : "text-lg",
            )}
          >
            {labels.title}
          </h3>
          <Price
            className="text-sm font-semibold"
            amount={labels.amount}
            currencyCode={labels.currencyCode}
          />
        </div>
      ) : null}
    </>
  );
}
