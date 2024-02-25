import { SignUpForAccountForm } from "@/components/account/account-sign-up-form";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
import { Breadcrumb } from "../breadcrumb";

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
      <Breadcrumb
        currentPage={{
          handle: "sign-up",
          title: "Sign up",
        }}
      />
      <div className="bg-opaque-white grid gap-8 p-8">
        <h1 className="text-3xl">Sign up for an account</h1>
        <SignUpForAccountForm
          className="bg-transparent sm:min-w-[36rem]"
          dictionary={dictionary}
          lang={lang}
        />
      </div>
    </>
  );
}
