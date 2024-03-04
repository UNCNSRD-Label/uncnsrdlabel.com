import { Prose } from "@/components/prose";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getCanonical } from "@/lib/metadata";
import { type PageProps } from "@/types/next";
import {
  getFragmentData,
  getLocalizationDetailsHandler,
  getShopPoliciesHandler,
  shopPolicyFragment,
  type PolicyName
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { SITE_DOMAIN_WEB } from "@uncnsrdlabel/lib";
import { camelCase } from "lodash";
import { notFound } from "next/navigation";
import { Nav } from "./nav";

export async function generateMetadata({
  params: { handle, lang },
}: PageProps & {
  params: { handle: PolicyName };
}) {
  const localization = await getLocalizationDetailsHandler({ lang });

  const path = `/policies/${handle}`;

  const policies = await getShopPoliciesHandler({ lang });

  const policyName = camelCase(handle) as PolicyName;

  const shopPolicyFragmentRef = policies[policyName];

  if (!shopPolicyFragmentRef) return notFound();

  const policy = getFragmentData(shopPolicyFragment, shopPolicyFragmentRef);

  return {
    alternates: {
      canonical: getCanonical(path),
      languages: getAlternativeLanguages({ localization, path }),
    },
    title: policy.title,
    openGraph: {
      title: policy.title,
      url: new URL(
        "/",
        `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}/${path}`,
      ),
    },
  };
}

export default async function PoliciesPage({
  params: { handle, lang },
}: PageProps & {
  params: { handle: PolicyName };
}) {
  const policies = await getShopPoliciesHandler({ lang });

  const policyName = camelCase(handle) as PolicyName;

  const shopPolicyFragmentRef = policies[policyName];

  if (!shopPolicyFragmentRef) return notFound();

  const policy = getFragmentData(shopPolicyFragment, shopPolicyFragmentRef);

  return (
    <>
      <Prose
        className="prose-sm prose-thead:border-hotPink prose-tr:border-hotPink [&_table_tr]:grid sm:[&_table_tr]:table-row sm:bg-opaque-white px-4 sm:p-8 min-w-full sm:fill-light sm:max-w-[48rem] md:order-2 overflow-x-auto"
        html={policy.body as string}
      />
      <Nav className="lg:justify-self-end md:order-1 lg:min-w-96" handle={handle} lang={lang} />
    </>
  );
}
