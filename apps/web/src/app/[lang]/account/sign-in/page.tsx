import { SignInToAccountForm } from "@/components/account/account-sign-in-form";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
import { Breadcrumb } from "../breadcrumb";

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
      <Breadcrumb
        currentPage={{
          handle: "sign-in",
          title: "Sign in",
        }}
      />
      <div className="grid gap-8 p-8 bg-opaque-white">
        <h1 className="text-3xl">Sign in to your account</h1>
        <SignInToAccountForm className="bg-transparent sm:min-w-[36rem]" dictionary={dictionary} lang={lang} />
      </div>
    </>
  );
}
