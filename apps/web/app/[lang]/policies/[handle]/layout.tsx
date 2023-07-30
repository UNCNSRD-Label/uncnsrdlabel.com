// import Logo from "ui/layout/logo";
import { Suspense } from "react";
import Navbar from "ui/layout/navbar";
import NavbarContent from "ui/layout/navbar/content";

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
        <div className="policy-page">{children}</div>
        {/* <Logo className="bottom-20" /> */}
      </Suspense>
    </>
  );
}
