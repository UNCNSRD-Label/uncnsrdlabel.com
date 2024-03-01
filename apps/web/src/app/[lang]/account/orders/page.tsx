import { Orders } from "@/components/account/orders/list";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Orders",
  description: "Edit your orders",
};

export default function AccountOrdersPage({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  if (!customerAccessToken) {
    redirect("/account");
  }

  return (
    <div className="bg-opaque-white grid gap-8 p-4 sm:p-8">
      <Orders
        dictionary={dictionary}
        lang={lang}
      />
    </div>
  );
}
