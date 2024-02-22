import { SignInToAccountForm } from "@/components/account/account-sign-in-form";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account sign up",
  description: "Sign in to your account",
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
      <h1 className="text-3xl">Sign in to your account</h1>
      <SignInToAccountForm dictionary={dictionary} lang={lang} />
    </>
  );
}
