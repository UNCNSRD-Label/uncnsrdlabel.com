import { AccountRecoverForm } from "@/components/account/recover-form";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account recovery",
  description: "Recover your account",
};

export default function AccountRecoverPage({
  params: { lang },
}: PageProps) {
  const dictionary = getDictionary({ lang });

  return (
    <div className="bg-opaque-white grid gap-8 p-4 sm:p-8">
      <h1 className="text-center text-lg sm:text-xl md:text-3xl">Recover your account</h1>
      <AccountRecoverForm
        className="bg-transparent sm:min-w-[36rem]"
        dictionary={dictionary}
        lang={lang}
      />
    </div>
  );
}
