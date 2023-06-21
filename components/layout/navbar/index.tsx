"use client";

import { clsx } from "clsx";

type Props = { children: React.ReactNode; blend?: boolean; sticky?: boolean };

export default function Navbar(props: Props) {
  return (
    <nav
      className={clsx(
        "pointer-events-none left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4",
        props.blend && "mix-blend-difference",
        props.sticky ? "sticky" : "fixed"
      )}
    >
      {props.children}
    </nav>
  );
}
