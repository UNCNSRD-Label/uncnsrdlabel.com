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
        <main className="page mb-48 min-h-fullMinusNavbar">{children}</main>
      </Suspense>
      <Logo />
    </>
  );
}
