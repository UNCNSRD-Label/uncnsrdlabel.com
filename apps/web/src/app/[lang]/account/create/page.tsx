import { Metadata } from "next";

import { AccountCreateForm } from "@uncnsrdlabel/components/molecules/account-create-form";

export const metadata: Metadata = {
  title: "Account",
  description: "Account forms built using the components.",
};

export default function AccountCreatePage() {
  return (
    <AccountCreateForm className="max-w-lg" />
  );
}
