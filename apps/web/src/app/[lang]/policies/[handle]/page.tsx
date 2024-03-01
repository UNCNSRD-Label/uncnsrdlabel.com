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
      <article className="bg-opaque-white p-8 min-w-full min-h-fullMinusNavbar sm:fill-light sm:max-w-[48rem] sm:order-2 mb-48 overflow-x-auto">
        <Prose
          className="prose-sm prose-thead:border-hotPink prose-tr:border-hotPink mb-8"
          html={policy.body as string}
        />
      </article>
      <Nav className="lg:justify-self-end sm:order-1 mb-8 sm:mb-0 lg:min-w-96" handle={handle} lang={lang} />
    </>
  );
}
