import { SignUpForAccountForm } from "@/components/account/account-sign-up-form";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account sign up",
  description: "Sign up for an account",
};

export default function AccountSignUpPage({
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const dictionary = getDictionary({ lang });

  return (
    <>
      <h1 className="text-3xl">Sign up for an account</h1>
      <SignUpForAccountForm dictionary={dictionary} lang={lang} />
    </>
  );
}
