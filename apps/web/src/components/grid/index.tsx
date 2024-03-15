import { cn } from "@uncnsrdlabel/lib";

export function Grid(props: React.ComponentProps<"ul">) {
  return (
    <menu
      {...props}
      className={cn(
        "grid w-full max-w-screen-2xl grid-flow-row grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 m-auto",
        {
          "xl:grid-cols-3": process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE === "true",
        },
        props.className,
      )}
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
