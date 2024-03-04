import { addAddressAction } from "@/components/account/addresses/action";
import { AddressesEditForm } from "@/components/account/addresses/edit-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Add address",
  description: "Add new address",
};

export default function AddressAddPage({ params: { id, lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  if (!customerAccessToken) {
    redirect("/account");
  }

  return (
    <div className="bg-opaque-white grid gap-8 px-4 sm:p-8">
      <AddressesEditForm
        action={addAddressAction}
        className="bg-transparent"
        dictionary={dictionary}
        id={id}
        lang={lang}
      />
    </div>
  );
}
