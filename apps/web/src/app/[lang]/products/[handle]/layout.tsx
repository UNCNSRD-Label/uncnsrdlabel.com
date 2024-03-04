import { Logo } from "@/components/layout/logo/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function ProductsLayout({
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      {children}
      <Logo />
    </>
  );
}
