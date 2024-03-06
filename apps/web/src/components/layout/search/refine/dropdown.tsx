"use client";

import { CaretRightIcon } from "@/components/icons/caret-right";
import { cn } from "@uncnsrdlabel/lib";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

export function RefineItemDropdown({
  active,
  children,
  className,
}: PropsWithChildren<{
  active: string;
  className?: string;
}>) {
  const [openSelect, setOpenSelect] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className={cn("relative", className)} ref={ref}>
      <div
        className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30"
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
      >
        <div>{active}</div>
        <CaretRightIcon className="h-4 rotate-90" />
      </div>
      {openSelect && (
        <ul
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black"
        >
          {children}
        </ul>
      )}
    </nav>
  );
}
