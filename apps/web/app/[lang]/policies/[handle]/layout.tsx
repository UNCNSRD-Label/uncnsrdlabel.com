// import Logo from "@uncnsrdlabel/ui/components/layout/logo";
import Navbar from "@uncnsrdlabel/ui/components/layout/navbar";
import NavbarContent from "@uncnsrdlabel/ui/components/layout/navbar/content";
import { Suspense } from "react";

export function SearchLayout({
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
        <div className="policy-page">{children}</div>
        {/* <Logo className="bottom-20" /> */}
      </Suspense>
    </>
  );
}
