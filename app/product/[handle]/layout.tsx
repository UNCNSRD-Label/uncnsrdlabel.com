import Logo from "components/layout/logo";
import Navbar from "components/layout/navbar";
import NavbarContent from "components/layout/navbar/content";
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
        {children}
        <Logo className="bottom-20" />
      </Suspense>
    </>
  );
}
