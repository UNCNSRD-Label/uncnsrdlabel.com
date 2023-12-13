import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { LoadingDots } from "@/components/loading/dots";
import { Suspense } from "react";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar offset sticky>
        <NavbarContent />
      </Navbar>
      <Suspense fallback={<LoadingDots />}>
        {children}
        <Logo className="bottom-20" />
      </Suspense>
    </>
  );
}
