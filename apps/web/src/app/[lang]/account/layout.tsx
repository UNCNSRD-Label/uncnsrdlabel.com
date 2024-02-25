import { LogotypeIcon } from "@/components/icons/logotype";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default function AccountLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Navbar>
        <NavbarContent lang={lang} />
      </Navbar>
      <main className="min-h-fullMinusNavbar grid max-w-[100dvw] content-start justify-center gap-16 bg-black p-8 pt-12 fill-light">
        <LogotypeIcon className="h-8 fill-inherit drop-shadow transition duration-300 ease-in-out hover:scale-110 sm:h-10 justify-self-center" />
        {children}
      </main>
    </>
  );
}
