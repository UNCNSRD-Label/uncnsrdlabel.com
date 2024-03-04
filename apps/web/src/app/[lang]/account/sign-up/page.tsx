import { SignUpForAccountForm } from "@/components/account/sign-up-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account sign up",
  description: "Sign up for an account",
};

export default function AccountSignUpPage({
  params: { lang },
}: PageProps) {
  const dictionary = getDictionary({ lang });

  return (
    <div className="bg-opaque-white grid gap-8 px-4 sm:p-8">
      <h1 className="text-center text-lg sm:text-xl md:text-3xl">Sign up for an account</h1>
      <SignUpForAccountForm
        className="bg-transparent sm:min-w-[36rem]"
        dictionary={dictionary}
        lang={lang}
      />
    </div>
  );
}
