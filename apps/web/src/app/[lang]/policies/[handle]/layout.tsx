import { Logo } from "@/components/layout/logo/index";
import { Navbar } from "@/components/layout/navbar/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function PoliciesLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  return (
    <div className="relative z-40">
      <Navbar lang={lang} />
      <main className="sm:bg-dark relative pb-20 grid max-w-[100dvw] gap-x-8 gap-y-4 bg-white bg-cover bg-fixed pt-20 sm:grid-cols-[1fr_3fr] sm:bg-[url('/images/backgrounds/MAV7957-Edit.jpg')] sm:px-8 lg:grid-cols-[1fr_fit-content(48rem)_1fr]">
        {children}
      </main>
      <Logo />
    </div>
  );
}
