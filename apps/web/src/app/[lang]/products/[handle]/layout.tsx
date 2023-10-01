import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { PageTransition } from "@/components/page-transition";
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
        <PageTransition>
          {children}
        </PageTransition>
        <Logo className="bottom-20" />
      </Suspense>
    </>
  );
}
