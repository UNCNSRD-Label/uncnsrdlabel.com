import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function PageLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Navbar sticky>
        <NavbarContent lang={lang} />
      </Navbar>
      <main className="page mb-48">{children}</main>
      <Logo />
    </>
  );
}
