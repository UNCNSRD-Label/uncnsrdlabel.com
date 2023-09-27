import { Metadata } from "next";

import { AccountSignInForm } from "@uncnsrdlabel/components/molecules/account-sign-in-form";

export const metadata: Metadata = {
  title: "Account",
  description: "Account forms built using the components.",
};

export default function AccountSignInPage() {
  return (
    <AccountSignInForm className="max-w-lg" />
  );
}
