import { LogotypeIcon } from "@/components/icons/logotype";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { getDictionary } from "@/lib/dictionary";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";
import { Nav } from "./nav";

export default async function AccountLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  const dictionary = getDictionary({ lang });

  return (
    <div className="min-h-fullMinusNavbar relative z-40">
      <Navbar offset sticky>
        <NavbarContent lang={lang} />
      </Navbar>
      <div
        className="grid max-w-[100dvw] gap-x-8 gap-y-4 bg-cover bg-fixed px-8 pt-16 sm:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_48rem_1fr]"
        style={{
          backgroundImage: "url('/images/backgrounds/MAV7957-Edit.jpg')",
        }}
      >
        <LogotypeIcon className="col-span-full h-8 justify-self-center fill-inherit drop-shadow transition duration-300 ease-in-out hover:scale-110 sm:h-10 mb-8" />
        <main className="min-h-fullMinusNavbar sm:fill-light relative grid sm:max-w-[48rem] content-start sm:mb-8 sm:order-2">
          {children}
        </main>
        <Nav className="lg:justify-self-end sm:order-1 mb-8 sm:mb-0" dictionary={dictionary} lang={lang} />
      </div>
    </div>
  );
}
