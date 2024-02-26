import { ResetAccountForm } from "@/components/account/account-password-reset-form";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
// import { Breadcrumb } from "../breadcrumb";

export const metadata: Metadata = {
  title: "Account password reset",
  description: "Reset the password for your account",
};

export default function AccountPasswordResetPage({
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const dictionary = getDictionary({ lang });

  return (
    <>
      {/* <Breadcrumb
        currentPage={{
          handle: "reset-account",
          title: "Reset password",
        }}
      /> */}
      <div className="bg-opaque-white grid gap-8 p-8">
        <h1 className="text-lg sm:text-xl md:text-3xl">Reset the password for your account</h1>
        <ResetAccountForm
          className="bg-transparent sm:min-w-[36rem]"
          dictionary={dictionary}
          lang={lang}
        />
      </div>
    </>
  );
}
