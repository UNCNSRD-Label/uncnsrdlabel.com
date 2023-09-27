import { Metadata } from "next";

import { CreateAccountForm } from "@uncnsrdlabel/components/molecules/create-account-form";

export const metadata: Metadata = {
  title: "Account",
  description: "Account forms built using the components.",
};

export default function AccountPage() {
  return (
    <CreateAccountForm className="max-w-lg" />
  );
}
