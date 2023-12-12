import { cn } from "@uncnsrdlabel/lib";

type Props = {
  children: React.ReactNode;
  className?: string;
  blend?: boolean;
  sticky?: boolean;
};

export function Navbar(props: Props) {
  return (
    <nav
      className={cn(
        "navbar-global pointer-events-none left-0 top-0 z-30 grid w-full grid-flow-col items-center justify-between gap-20 px-6 py-4 sm:auto-cols-fr pt-[env(safe-area-inset-top,_2rem)]",
        {
          "text-light fill-white stroke-white mix-blend-difference":
            props.blend,
        },
        props.sticky ? "sticky" : "fixed",
        props.className,
      )}
    >
      {props.children}
    </nav>
  );
}
