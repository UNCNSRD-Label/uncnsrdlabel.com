import { Logo } from "@/components/layout/logo/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function PoliciesLayout({
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <main className="sm:bg-dark bg-light relative grid max-w-[100dvw] gap-x-8 gap-y-4 pb-32 pt-[calc(theme(spacing.safeTop)_+_theme(spacing.16))] sm:bg-[url('/images/backgrounds/MAV7957-Edit.jpg')] sm:bg-cover sm:bg-fixed sm:px-8 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_fit-content(48rem)_1fr]">
        {children}
      </main>
      <Logo />
    </>
  );
}
