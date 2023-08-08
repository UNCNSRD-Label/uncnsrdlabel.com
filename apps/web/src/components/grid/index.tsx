import { clsx } from "clsx";

export function Grid(props: React.ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      className={clsx("grid grid-flow-row gap-4 py-5", props.className)}
    >
      {props.children}
    </ul>
  );
}

export function GridItem(props: React.ComponentProps<"li">) {
  return (
    <li
      {...props}
      className={clsx(
        "relative h-full w-full transition-opacity",
        props.className,
      )}
    >
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;