import { SignUpForAccountForm } from "@/components/account/sign-up-form";
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
    <div className="bg-opaque-white grid gap-8 p-4 sm:p-8">
      <h1 className="text-lg sm:text-xl md:text-3xl">Sign up for an account</h1>
      <SignUpForAccountForm
        className="sm:bg-transparent p-0 sm:p-4 md:p-8 sm:min-w-[36rem]"
        dictionary={dictionary}
        lang={lang}
      />
    </div>
  );
}
