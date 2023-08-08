// import {Logo} from "@/components/layout/logo";
import { Navbar } from "@/components/layout/navbar";
import { NavbarContent } from "@/components/layout/navbar/content";
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
        <div className="mx-8 mb-48 max-w-2xl py-16 sm:mx-auto">{children}</div>
        {/* <Logo className="bottom-20" /> */}
      </Suspense>
    </>
  );
}
