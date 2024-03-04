import { AccountResetForm } from "@/components/account/password-reset-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account password reset",
  description: "Reset the password for your account",
};

export default function AccountResetPage({
  params: { lang },
}: PageProps) {
  const dictionary = getDictionary({ lang });

  return (
    <div className="bg-opaque-white grid gap-8 px-4 sm:p-8">
      <h1 className="text-center text-lg sm:text-xl md:text-3xl">
        Reset the password for your account
      </h1>
      <AccountResetForm
        className="bg-transparent sm:min-w-[36rem]"
        dictionary={dictionary}
        lang={lang}
      />
    </div>
  );
}
