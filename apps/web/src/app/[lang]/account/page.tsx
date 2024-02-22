import { SignInOrSignUpForAccountForm } from "@/components/account/account-sign-in-or-sign-up-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
// import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: "Account",
  description: "Sign up or sign in to your account",
};

export default function AccountPage({
  params: { lang },
}: PageProps) {
  const dictionary = getDictionary({ lang });

  const accessToken = cookies().get('accessToken');
  
  if (!accessToken) {
    // redirect('/account/details')
    return <SignInOrSignUpForAccountForm dictionary={dictionary} lang={lang} />;
  }

  return (
    <div>
      <h1>Account</h1>
      <p>Sign up or sign in to your account</p>
    </div>
  );
}
