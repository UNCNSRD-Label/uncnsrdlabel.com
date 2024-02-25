import { RecoverAccountForm } from "@/components/account/account-recover-form";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
import { Breadcrumb } from "../breadcrumb";

export const metadata: Metadata = {
  title: "Account recovery",
  description: "Recover your account",
};

export default function AccountRecoverPage({
  lang,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
}) {
  const dictionary = getDictionary({ lang });

  return (
    <>
      <Breadcrumb
        currentPage={{
          handle: "recover",
          title: "Recover account",
        }}
      />
      <div className="bg-opaque-white grid gap-8 p-8">
        <h1 className="text-3xl">Recover your account</h1>
        <RecoverAccountForm
          className="bg-transparent sm:min-w-[36rem]"
          dictionary={dictionary}
          lang={lang}
        />
      </div>
    </>
  );
}
