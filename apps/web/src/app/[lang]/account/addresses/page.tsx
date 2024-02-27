import { Addresses } from "@/components/account/addresses";
import { getDictionary } from "@/lib/dictionary";
import { type PageProps } from "@/types/next";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import { Breadcrumb } from "../breadcrumb";

export const metadata: Metadata = {
  title: "Addresses",
  description: "Edit your addresses",
};

export default function AddressesPage({ params: { lang } }: PageProps) {
  const dictionary = getDictionary({ lang });

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  if (!customerAccessToken) {
    redirect("/account");
  }

  return (
    <>
      {/* <Breadcrumb
        currentPage={{
          handle: "addresses",
          title: "Addresses",
        }}
      /> */}
      <div className="bg-opaque-white grid gap-8 p-8">
        <Addresses
          className="bg-transparent"
          dictionary={dictionary}
          lang={lang}
        />
      </div>
    </>
  );
}
