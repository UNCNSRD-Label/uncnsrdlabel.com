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
        className="grid max-w-[100dvw] gap-y-4 bg-cover bg-fixed px-8 pt-16 sm:pt-12 md:grid-cols-[1fr_3fr_1fr] md:gap-8"
        style={{
          backgroundImage: "url('/images/backgrounds/MAV7957-Edit.jpg')",
        }}
      >
        <LogotypeIcon className="col-span-3 h-8 justify-self-center fill-inherit drop-shadow transition duration-300 ease-in-out hover:scale-110 sm:h-10" />
        <Nav dictionary={dictionary} lang={lang} />
        <main className="min-h-fullMinusNavbar fill-light relative grid max-w-[100dvw] content-start justify-center gap-16 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}
