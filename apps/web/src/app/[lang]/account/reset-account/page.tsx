import { ResetAccountForm } from "@/components/account/account-password-reset-form";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account password reset",
  description: "Reset the password for your account",
};

export default function AccountPasswordResetPage({
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const dictionary = getDictionary({ lang });

  return (
    <>
      <h1 className="text-3xl">Reset the password for your account</h1>
      <ResetAccountForm className="sm:min-w-[36rem]" dictionary={dictionary} lang={lang} />
    </>
  );
}
