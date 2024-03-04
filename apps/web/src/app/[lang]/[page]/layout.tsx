import { Logo } from "@/components/layout/logo/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function PageLayout({
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <main className="page relative bg-white pb-32 pt-16">{children}</main>
      <Logo />
    </>
  );
}
