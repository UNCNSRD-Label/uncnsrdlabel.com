import Logo from "@uncnsrdlabel/ui/components/layout/logo";
import Navbar from "@uncnsrdlabel/ui/components/layout/navbar";
import NavbarContent from "@uncnsrdlabel/ui/components/layout/navbar/content";
import { PageTransition } from "@uncnsrdlabel/ui/components/page-transition";
import { Suspense } from "react";

export function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <Suspense>
        <PageTransition>{children}</PageTransition>
        <Logo className="bottom-20" />
      </Suspense>
    </>
  );
}
