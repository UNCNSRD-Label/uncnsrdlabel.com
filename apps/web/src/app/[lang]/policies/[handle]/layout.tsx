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
    <div className="relative z-40">
      <Navbar offset sticky>
        <NavbarContent lang={lang} />
      </Navbar>
      <main className="grid max-w-[100dvw] gap-x-8 gap-y-4 bg-cover bg-fixed py-16 sm:grid-cols-[1fr_3fr] sm:bg-dark sm:bg-[url('/images/backgrounds/MAV7957-Edit.jpg')] sm:px-8 lg:grid-cols-[1fr_48rem_1fr]">
        {children}
      </main>
      <Logo />
    </div>
  );
}
