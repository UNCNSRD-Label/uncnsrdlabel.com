import { AccountEditForm } from "@/components/account/edit-form";
import { NavigationEvents } from "@/components/navigation-events";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Account details",
  description: "Edit your user profile details",
};

export default function AccountProfilePage({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  if (!customerAccessToken) {
    redirect("/account");
  }

  return (
    <>
      <div className="sm:bg-light grid gap-8 px-4 sm:p-8">
        <AccountEditForm
          className="bg-transparent"
          dictionary={dictionary}
          lang={lang}
        />
      </div>
      <Suspense fallback={null}>
        <NavigationEvents pageType="customersAccount" />
      </Suspense>
    </>
  );
}
