import { Orders } from "@/components/account/orders/list";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type ResolvedIntlConfig } from "react-intl";

export const metadata: Metadata = {
  title: "Orders",
  description: "Edit your orders",
};

export default async function AccountOrdersPage({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  if (!customerAccessToken) {
    redirect("/account");
  }

  return (
    <div className="sm:bg-light grid gap-8 px-4 sm:p-8">
      <header>
        <h1 className="text-2xl">
          {intl.formatMessage({
            id: "component.Orders.card.title",
          })}
        </h1>
        <span>
          {intl.formatMessage({
            id: "component.Orders.card.description",
          })}
        </span>
      </header>
 
      <Orders dictionary={dictionary} lang={lang} />
    </div>
  );
}
