import { LogotypeIcon } from "@/components/icons/logotype";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { getDictionary } from "@/lib/dictionary";
import { type LayoutProps } from "@/types/next";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";
import { Nav } from "./nav";

export default async function AccountLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  const dictionary = getDictionary({ lang });

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  return (
    <div className="min-h-fullMinusNavbar relative z-40">
      <Navbar offset sticky>
        <NavbarContent lang={lang} />
      </Navbar>
      <div
        className="grid max-w-[100dvw] gap-x-8 gap-y-4 bg-cover bg-fixed px-8 pt-16 sm:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_48rem_1fr] sm:[grid-template-areas:'start_main'] lg:[grid-template-areas:'start_main_end']"
        style={{
          backgroundImage: "url('/images/backgrounds/MAV7957-Edit.jpg')",
        }}
      >
        <LogotypeIcon className="col-span-full mb-8 h-8 justify-self-center fill-inherit drop-shadow transition duration-300 ease-in-out hover:scale-110 sm:h-10" />
        <main className="min-h-fullMinusNavbar sm:fill-light relative grid content-start sm:order-2 sm:mb-8 sm:max-w-[48rem] [grid-area:main]">
          {children}
        </main>
        {!!customerAccessToken && (
          <Nav
            className="mb-8 sm:order-1 sm:mb-0 lg:min-w-96 lg:justify-self-end [grid-area:start]"
            dictionary={dictionary}
            lang={lang}
          />
        )}
      </div>
    </div>
  );
}
