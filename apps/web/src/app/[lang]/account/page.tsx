import {
  SignInOrSignUpForAccountForm,
} from "@/components/account/account-sign-in-or-sign-up-form";
import {
  UpdateAccountForm,
} from "@/components/account/account-update-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
// import { redirect } from 'next/navigation';
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign up or sign in to your account",
};

export default function AccountPage({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const customerAccessTokenCookie = cookies().get("customerAccessToken");

  const customerAccessToken = customerAccessTokenCookie?.value;

  if (!customerAccessToken) {
    // redirect('/account/details')
    return <SignInOrSignUpForAccountForm dictionary={dictionary} lang={lang} />;
  }

  return <UpdateAccountForm dictionary={dictionary} lang={lang} />;
}
