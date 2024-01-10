import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function PoliciesLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Navbar sticky>
        <NavbarContent lang={lang} />
      </Navbar>
      <main className="policy min-h-fullMinusNavbar mt-12 grid max-w-[100dvw] gap-16 px-8 md:grid-cols-[2fr_3fr] md:px-0">
        {children}
      </main>
      <Logo />
    </>
  );
}
