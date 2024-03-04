import { Logo } from "@/components/layout/logo/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function PageLayout({
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <main className="bg-light relative grid max-w-[100dvw] gap-x-8 gap-y-4 pb-32 pt-16 sm:px-8">
        {children}
      </main>
      <Logo />
    </>
  );
}
