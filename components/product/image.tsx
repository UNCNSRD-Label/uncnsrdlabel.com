import clsx from "clsx";
import Image from "next/image";

export function ProductImage({
  active,
  className,
  isInteractive = true,
  ...props
}: {
  active?: boolean;
  className?: string;
  isInteractive?: boolean;
} & React.ComponentProps<typeof Image>) {
  if (!props.src) {
    return null;
  }

  return (
    <figure className={clsx("relative overflow-hidden", className)}>
      <Image
        className={clsx("relative block h-full w-full object-cover", {
          "transition duration-300 ease-in-out hover:scale-105": isInteractive,
        })}
        {...props}
        alt={props.title || ""}
      />
    </figure>
  );
}
