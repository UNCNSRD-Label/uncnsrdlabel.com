import { Metadata } from "next";

import { RecoverAccountForm } from "@/components/account/account-recover-form";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: "Account recovery",
  description: "Recover your account",
};

export default function AccountRecoverPage({
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const dictionary = getDictionary({ lang });

  return (
    <>
      <h1 className="text-3xl">Sign up for an account</h1>
      <RecoverAccountForm className="sm:min-w-[36rem]" dictionary={dictionary} lang={lang} />
    </>
  );
}
