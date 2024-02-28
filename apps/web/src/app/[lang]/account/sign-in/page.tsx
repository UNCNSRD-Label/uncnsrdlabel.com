import { SignInToAccountForm } from "@/components/account/sign-in-form";
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
    <div className="bg-opaque-white grid gap-8 p-4 sm:p-8">
      <h1 className="text-lg sm:text-xl md:text-3xl">
        Sign in to your account
      </h1>
      <SignInToAccountForm
        className="bg-transparent sm:min-w-[36rem]"
        dictionary={dictionary}
        lang={lang}
      />
    </div>
  );
}
