import { RefineItemDropdown } from "@/components/layout/search/refine/dropdown";
import { cn } from "@uncnsrdlabel/lib";
import { PropsWithChildren, Suspense } from "react";

export function RefineBy({
  active,
  children,
  className,
  title,
}: PropsWithChildren<{
  active: string;
  className?: string;
  title?: string;
}>) {
  return (
    <>
      <section className={cn("uppercase", className)}>
        {title ? <h3 className="hidden md:block">{title}</h3> : null}
        <Suspense fallback={null}>
          <nav className="hidden md:grid">{children}</nav>
        </Suspense>
        <Suspense fallback={null}>
          <RefineItemDropdown active={active} className="md:hidden">
            {children}
          </RefineItemDropdown>
        </Suspense>
      </section>
    </>
  );
}
