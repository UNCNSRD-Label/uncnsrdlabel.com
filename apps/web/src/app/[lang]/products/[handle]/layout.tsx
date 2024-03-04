import { Logo } from "@/components/layout/logo/index";
import { Navbar } from "@/components/layout/navbar/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function ProductsLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Navbar lang={lang} />
      {children}
      <Logo />
    </>
  );
}
