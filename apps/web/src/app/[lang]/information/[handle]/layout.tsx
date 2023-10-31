import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { LoadingSkeleton } from "@/components/loading/skeleton";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar sticky>
        <NavbarContent />
      </Navbar>
      <Suspense fallback={<LoadingSkeleton />}>
        <div className="policy min-h-fullMinusNavbar mx-8 mt-12 grid max-w-[100dvw] gap-16 md:mx-0 md:grid-cols-[2fr_3fr]">
          {children}
        </div>
      </Suspense>
      <Logo />
    </>
  );
}
