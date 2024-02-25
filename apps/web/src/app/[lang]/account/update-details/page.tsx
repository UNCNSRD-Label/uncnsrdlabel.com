import { UpdateAccountForm } from "@/components/account/account-update-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Breadcrumb } from "../breadcrumb";

export const metadata: Metadata = {
  title: "Account details",
  description: "Edit your account details",
};

export default function AccountPage({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const customerAccessToken = cookies().get('customerAccessToken')?.value;

  if (!customerAccessToken) {
    redirect('/account/sign-in')
  }

  return (
    <>
      <Breadcrumb
        currentPage={{
          handle: "update-details",
          title: "Update details",
        }} />
      <div className="bg-opaque-white grid gap-8 p-8">
        <UpdateAccountForm className="bg-transparent" dictionary={dictionary} lang={lang} />
      </div>
    </>
  );
}