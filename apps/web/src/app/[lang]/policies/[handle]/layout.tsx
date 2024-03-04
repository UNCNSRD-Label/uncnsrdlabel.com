import { Logo } from "@/components/layout/logo/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function PoliciesLayout({
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <main className="sm:bg-dark relative grid max-w-[100dvw] gap-x-8 gap-y-4 bg-white bg-cover bg-fixed pb-32 pt-16 md:grid-cols-[1fr_3fr] sm:bg-[url('/images/backgrounds/MAV7957-Edit.jpg')] sm:px-8 lg:grid-cols-[1fr_fit-content(48rem)_1fr]">
        {children}
      </main>
      <Logo />
    </>
  );
}
