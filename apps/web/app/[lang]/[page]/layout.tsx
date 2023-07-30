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
        <div className="mx-8 mb-48 max-w-2xl py-16 sm:mx-auto">{children}</div>
        {/* <Logo className="bottom-20" /> */}
      </Suspense>
    </>
  );
}
