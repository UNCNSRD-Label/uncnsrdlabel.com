import { Addresses } from "@/components/account/addresses/page";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Addresses",
  description: "Edit your addresses",
};

export default function AccountAddressesPage({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  if (!customerAccessToken) {
    redirect("/account");
  }

  return (
    <div className="bg-opaque-white grid gap-8 p-4 sm:p-8">
      <Addresses
        className="bg-transparent"
        dictionary={dictionary}
        lang={lang}
      />
    </div>
  );
}
