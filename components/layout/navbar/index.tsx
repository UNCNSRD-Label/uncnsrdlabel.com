"use client";

import { clsx } from "clsx";

type Props = { children: React.ReactNode; blend?: boolean; sticky?: boolean };

export default function Navbar(props: Props) {
  return (
    <nav
      className={clsx(
        "pointer-events-none left-0 top-0 z-50 grid w-full grid-flow-col items-center justify-between gap-20 px-6 py-4 sm:auto-cols-fr",
        props.blend && "mix-blend-difference",
        props.sticky ? "sticky" : "fixed"
      )}
    >
      {props.children}
    </nav>
  );
}
