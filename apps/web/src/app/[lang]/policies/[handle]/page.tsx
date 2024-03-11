import { NavigationEvents } from "@/components/navigation-events";
import { Prose } from "@/components/prose";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getCanonical } from "@/lib/metadata";
import { type PageProps } from "@/types/next";
import {
  getFragmentData,
  getLocalizationDetailsHandler,
  getShopPoliciesHandler,
  shopPolicyFragment,
  type PolicyName,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { SITE_DOMAIN_WEB } from "@uncnsrdlabel/lib";
import { camelCase } from "lodash";
import { notFound } from "next/navigation";
import { Suspense } from "react";
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
        className="prose-sm prose-thead:border-hotPink prose-tr:border-hotPink sm:bg-opaque-white sm:fill-light min-w-full overflow-x-auto px-4 sm:max-w-[48rem] sm:p-8 md:order-2 [&_table_tr]:grid sm:[&_table_tr]:table-row"
        html={policy.body as string}
      />
      <Nav
        className="md:order-1 lg:min-w-96 lg:justify-self-end"
        handle={handle}
        lang={lang}
      />
      <Suspense fallback={null}>
        <NavigationEvents pageType="policy" />
      </Suspense>
    </>
  );
}
