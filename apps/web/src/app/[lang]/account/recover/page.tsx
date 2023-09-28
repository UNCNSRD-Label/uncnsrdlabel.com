import { Metadata } from "next";

import { AccountRecoverForm } from "@uncnsrdlabel/components/molecules/account-recover-form";

export const metadata: Metadata = {
  title: "Account",
  description: "Account forms built using the components.",
};

export default function AccountRecoverPage() {
  return (
    <AccountRecoverForm className="max-w-lg" />
  );
}
