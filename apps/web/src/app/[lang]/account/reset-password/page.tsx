import { Metadata } from "next";

import { AccountPasswordResetForm } from "@uncnsrdlabel/components/molecules/account-password-reset-form";

export const metadata: Metadata = {
  title: "Account",
  description: "Account forms built using the components.",
};

export default function AccountPasswordResetPage() {
  return <AccountPasswordResetForm className="max-w-lg" />;
}
