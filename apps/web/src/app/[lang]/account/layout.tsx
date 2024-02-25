import { LogotypeIcon } from "@/components/icons/logotype";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { type LayoutProps } from "@/types/next";
// import Image from "next/image";
import { PropsWithChildren } from "react";

export default function AccountLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  return (
    <div
      // className="relative z-40"
      className="bg-cover bg-fixed z-40 relative"
      style={{
        backgroundImage: "url('/images/backgrounds/MAV7957-Edit.jpg')",
      }}
    >
      <Navbar offset sticky>
        <NavbarContent lang={lang} />
      </Navbar>
      {/* <div className="absolute h-[100dvh] w-[100dvw] z-0">
        <Image
          alt="Model in an Arizona print bikini on her hands and knees on a mirror"
          className="absolute inset-0"
          layout="fill"
          objectFit="cover"
          src="/images/backgrounds/MAV7957-Edit.jpg"
        />
      </div> */}
      <main className="min-h-fullMinusNavbar fill-light relative grid max-w-[100dvw] content-start justify-center gap-16 px-8 py-12">
        <LogotypeIcon className="h-8 justify-self-center fill-inherit drop-shadow transition duration-300 ease-in-out hover:scale-110 sm:h-10" />
        {children}
      </main>
    </div>
  );
}
