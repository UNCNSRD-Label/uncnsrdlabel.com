import { Prose } from "@/components/prose";
import { getDictionary } from "@/lib/dictionary";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getCanonical } from "@/lib/metadata";
import { type PageProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getFragmentData,
  getLocalizationDetailsHandler,
  getMenuHandler,
  getShopPoliciesHandler,
  shopPolicyFragment,
  type PolicyName
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { SITE_DOMAIN_WEB, cn } from "@uncnsrdlabel/lib";
import { camelCase } from "lodash";
import { notFound } from "next/navigation";
import { type ResolvedIntlConfig } from "react-intl";

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
  const messages: ResolvedIntlConfig["messages"] = await getDictionary({ lang });

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const customerCareMenu = await getMenuHandler({
    lang,
    variables: {
      handle: "customer-care",
    },
  });

  const policies = await getShopPoliciesHandler({ lang });

  const policyName = camelCase(handle) as PolicyName;

  const shopPolicyFragmentRef = policies[policyName];

  if (!shopPolicyFragmentRef) return notFound();

  const policy = getFragmentData(shopPolicyFragment, shopPolicyFragmentRef);

  return (
    <>
      <nav className="md:min-h-fullMinusNavbar relative hidden content-start md:grid md:justify-center">
        {customerCareMenu.items?.length ? (
          <dl className="grid content-start gap-4 md:sticky md:top-64 md:mb-64">
            <dt className="text-sm uppercase">{intl.formatMessage({
              id: "page.policy.nav.title",
            })}</dt>
            {customerCareMenu.items.map((item, index) => (
              <dd key={item.title || index}>
                <Link
                  className={cn(
                    "sm:text-xxs text-xs uppercase transition duration-150 ease-in-out",
                    {
                      "underline decoration-dotted underline-offset-8":
                        item.url?.endsWith(handle),
                    },
                  )}
                  href={item.url ?? "#"}
                >
                  {item.title}
                </Link>
              </dd>
            ))}
          </dl>
        ) : null}
      </nav>
      <article className="mb-48">
        <Prose
          className="prose-sm prose-thead:border-hotPink prose-tr:border-hotPink mb-8 grid"
          html={policy.body as string}
        />
      </article>
    </>
  );
}
