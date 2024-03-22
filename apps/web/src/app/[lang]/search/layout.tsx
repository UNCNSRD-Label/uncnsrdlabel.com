import { Logo } from "@/components/layout/logo/index";
import { type LayoutProps } from "@/types/next";
import { PropsWithChildren } from "react";

export default async function SearchLayout({
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <div className="bg-light relative mx-auto flex min-h-[100dvh] w-full flex-col justify-center gap-4 px-4 pb-32 [&:has(+_.pt-safeTop)]:top-safeTop pt-16 md:flex-row">
        {children}
      </div>
      <Logo />
    </>
  );
}
