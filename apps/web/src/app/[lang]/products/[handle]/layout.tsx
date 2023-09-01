import { Logo } from "@/components/layout/logo/index.js";
import { NavbarContent } from "@/components/layout/navbar/content.js";
import { Navbar } from "@/components/layout/navbar/index.js";
import { PageTransition } from "@/components/page-transition.js";
import { Suspense } from "react";

export default function SearchLayout({
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
