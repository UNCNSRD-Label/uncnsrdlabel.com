import { updateOrdersAction } from "@/components/account/orders/action";
import { OrdersEditForm } from "@/components/account/orders/edit-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit orders",
  description: "Edit orders",
};

export default function OrdersUpdatePage({ params: { id, lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  if (!customerAccessToken) {
    redirect("/account");
  }

  return (
    <>
      <div className="bg-opaque-white grid gap-8 p-4 sm:p-8">
        <OrdersEditForm
          action={updateOrdersAction}
          className="bg-transparent"
          dictionary={dictionary}
          id={id}
          lang={lang}
        />
      </div>
    </>
  );
}
