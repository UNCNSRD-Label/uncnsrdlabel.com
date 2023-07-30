import { Suspense } from "react";
import Logo from "ui/layout/logo";
import Navbar from "ui/layout/navbar";
import NavbarContent from "ui/layout/navbar/content";
import { PageTransition } from "ui/page-transition";

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
