import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
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
      <Suspense>
        <div className="policy max-w-[100dvw] min-h-fullMinusNavbar gap-16 grid md:grid-cols-[2fr_3fr] mx-8 md:mx-0 mt-12 md:mt-0">{children}</div>
      </Suspense>
      <Logo />
    </>
  );
}
