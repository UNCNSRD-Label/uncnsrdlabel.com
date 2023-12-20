import { cn } from "@uncnsrdlabel/lib";

export function Grid(props: React.ComponentProps<"ul">) {
  return (
    <menu
      {...props}
      className={cn("grid grid-flow-row gap-x-2 gap-y-4 sm:gap-4", props.className)}
    >
      {props.children}
    </menu>
  );
}

export function GridItem(props: React.ComponentProps<"li">) {
  return (
    <li
      {...props}
      className={cn(
        "relative h-full w-full transition-opacity",
        props.className,
      )}
    >
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;
