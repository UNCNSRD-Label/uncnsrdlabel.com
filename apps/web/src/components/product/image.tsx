import { Image } from "@/components/media/image";
import { cn } from "@uncnsrdlabel/lib";

export function ProductImage({
  active,
  // background = "hotPink",
  className,
  isInteractive = true,
  scale = 1,
  ...props
}: {
  active?: boolean;
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
  className?: string;
  isInteractive?: boolean;
  scale?: number;
} & React.ComponentProps<typeof Image>) {
  if (!props.src) {
    return null;
  }

  return (
    <figure
      className={cn(
        "overflow-hidden",
        "relative",
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
        // },
        className,
      )}
      style={{
        // scale
        width: `calc(100% * ${scale})`,
      }}
    >
      <Image
        className={cn("relative block h-full w-full object-cover", {
          "transition duration-300 ease-in-out": isInteractive,
        })}
        {...props}
        alt={props.title || ""}
      />
    </figure>
  );
}
