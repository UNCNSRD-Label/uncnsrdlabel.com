import { AccountSignInOrSignUpForm } from "@/components/account/sign-in-or-sign-up-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Account",
  description: "Sign up or sign in to your account",
};

export default function AccountPage({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const customerAccessToken = cookies().get('customerAccessToken')?.value;

  if (customerAccessToken) {
    redirect('/account/details')
  }

  return <AccountSignInOrSignUpForm dictionary={dictionary} lang={lang} />;
}