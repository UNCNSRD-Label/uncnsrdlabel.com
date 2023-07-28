import { clsx } from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  blend?: boolean;
  sticky?: boolean;
};

export default function Navbar(props: Props) {
  return (
    <nav
      className={clsx(
        "pointer-events-none left-0 top-0 z-30 grid w-full grid-flow-col items-center justify-between gap-20 px-6 py-4 sm:auto-cols-fr",
        {
          "fill-white stroke-white text-light mix-blend-difference":
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
