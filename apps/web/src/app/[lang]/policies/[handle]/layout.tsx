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
        <main className="policy min-h-fullMinusNavbar px-8 mt-12 grid max-w-[100dvw] gap-16 md:px-0 md:grid-cols-[2fr_3fr]">
          {children}
        </main>
      </Suspense>
      <Logo />
    </>
  );
}
