import { AccountResetForm } from "@/components/account/password-reset-form";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account password reset",
  description: "Reset the password for your account",
};

export default function AccountResetPage({
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const dictionary = getDictionary({ lang });

  return (
    <div className="bg-opaque-white grid gap-8 p-4 sm:p-8">
      <h1 className="text-lg sm:text-xl md:text-3xl">
        Reset the password for your account
      </h1>
      <AccountResetForm
        className="bg-transparent sm:min-w-[36rem]"
        dictionary={dictionary}
        lang={lang}
      />
    </div>
  );
}
