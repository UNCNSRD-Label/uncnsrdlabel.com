import { Logo } from "@/components/layout/logo/index";
import { Navbar } from "@/components/layout/navbar/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function PageLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  return (
    <div className="relative z-40">
      <Navbar lang={lang} />
      <main className="page relative pb-40 bg-white pt-20">{children}</main>
      <Logo />
    </div>
  );
}
