import { Logo } from "@/components/layout/logo/index";
import { getDictionary } from "@/lib/dictionary";
import { type LayoutProps } from "@/types/next";
import { cn } from "@uncnsrdlabel/lib";
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
    <div className="sm:bg-dark bg-light relative grid max-w-[100dvw] gap-x-8 gap-y-4 pt-16 sm:bg-[url('/images/backgrounds/MAV7957-Edit.jpg')] sm:bg-cover sm:bg-fixed sm:px-8 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_fit-content(48rem)_1fr] md:[grid-template-areas:'start_main_end']">
      <main
        className={cn(
          "sm:fill-light relative grid content-start sm:order-2 sm:mb-0 pb-24 sm:pb-32 md:[grid-area:main]",
          {
            "pb-0": !!customerAccessToken === true,
          }
        )}
      >
        {children}
      </main>
      {!!customerAccessToken === true && (
        <Nav
          className="pb-24 sm:pb-32 md:order-1 sm:mb-0 sm:[grid-area:start] lg:min-w-96 lg:justify-self-end"
          dictionary={dictionary}
          lang={lang}
        />
      )}
      <Logo className="col-span-full sm:order-3" />
    </div>
  );
}
