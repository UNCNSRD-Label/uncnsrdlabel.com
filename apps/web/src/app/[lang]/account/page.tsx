import { SignInOrSignUpForAccountForm } from "@/components/account/account-sign-in-or-sign-up-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
// import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Account",
  description: "Sign up or sign in to your account",
};

export default function AccountPage({
  params: { lang },
}: PageProps) {
  // const account = false;
  
  // if (account) {
  //   redirect('/account/details')
  // }

  const dictionary = getDictionary({ lang });

  return <SignInOrSignUpForAccountForm className="max-w-lg" dictionary={dictionary} lang={lang} />;
}
