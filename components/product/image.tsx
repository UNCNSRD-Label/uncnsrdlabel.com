import clsx from "clsx";
import Image from "components/image";

export function ProductImage({
  active,
  className,
  isInteractive = true,
  scale = 1,
  ...props
}: {
  active?: boolean;
  className?: string;
  isInteractive?: boolean;
  scale?: number;
} & React.ComponentProps<typeof Image>) {
  if (!props.src) {
    return null;
  }

  return (
    <figure
      className={clsx("relative", className)}
      style={{
        // scale
        width: `calc(100% * ${scale})`,
      }}
    >
      <Image
        className={clsx("relative block h-full w-full object-cover", {
          "transition duration-300 ease-in-out": isInteractive,
        })}
        {...props}
        alt={props.title || ""}
      />
    </figure>
  );
}
