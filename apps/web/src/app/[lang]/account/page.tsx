import { AccountSignInOrSignUpForm } from "@/components/account/sign-in-or-sign-up-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type ResolvedIntlConfig } from "react-intl";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign up or sign in to your account",
};

export default async function AccountPage({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  if (customerAccessToken) {
    redirect("/account/profile");
  }

  return (
    <div className="bg-opaque-white grid gap-8 p-8 lg:shadow">
      <h1 className="text-center text-lg sm:text-xl md:text-3xl">
        {intl.formatMessage({
          id: "page.AccountPage.title",
        })}
      </h1>
      <AccountSignInOrSignUpForm dictionary={dictionary} lang={lang} />
    </div>
  );
}
