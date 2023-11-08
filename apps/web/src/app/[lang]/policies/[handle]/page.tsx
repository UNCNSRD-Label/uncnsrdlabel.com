"use server";

import { LoadingSkeleton } from "@/components/loading/skeleton";
import { Prose } from "@/components/prose";
import { languagesArray } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { type PageProps } from "@/types/next";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getFragmentData,
  getMenuHandler,
  getPolicyHandler,
  shopPolicyFragment,
  type PolicyName,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { SITE_DOMAIN_WEB, cn } from "@uncnsrdlabel/lib";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// export const runtime = "edge";

export async function generateMetadata({
  params: { handle },
}: {
  params: PageProps & { handle: PolicyName };
}): Promise<Metadata> {
  const lang = state$.lang.get();

  const shopPolicyFragmentRef = await getPolicyHandler({ handle }, lang);

  if (!shopPolicyFragmentRef) return notFound();

  const policy = getFragmentData(shopPolicyFragment, shopPolicyFragmentRef);

  const path = `/policies/${handle}`;

  return {
    alternates: {
      canonical: path,
      languages: Object.fromEntries(languagesArray(path)),
    },
    title: policy.title,
    openGraph: {
      title: policy.title,
      url: new URL("/", `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}/${path}`)
    },
  };
}

export default async function PolicyPage({
  params,
}: {
  params: { handle: PolicyName };
}) {
  const lang = state$.lang.get();

  const handle = params.handle as PolicyName;

  const shopPolicyFragmentRef = await getPolicyHandler({ handle }, lang);

  const customerCareMenu = await getMenuHandler({ handle: "customer-care" });

  if (!shopPolicyFragmentRef) return notFound();

  const policy = getFragmentData(shopPolicyFragment, shopPolicyFragmentRef);

  return (
    <>
      <nav className="md:min-h-fullMinusNavbar relative hidden content-start md:grid md:justify-center">
        {customerCareMenu.items.length ? (
          <dl className="grid content-start gap-4 md:sticky md:top-64 md:mb-64">
            <dt className="text-sm uppercase">Customer Care</dt>
            {customerCareMenu.items.map((item, index) => (
              <dd key={item.title || index}>
                <Link
                  href={item.url ?? "#"}
                  className={cn(
                    "sm:text-xxs text-xs uppercase transition duration-150 ease-in-out",
                    {
                      "underline decoration-dotted underline-offset-8":
                        item.url?.endsWith(params.handle),
                    },
                  )}
                >
                  {item.title}
                </Link>
              </dd>
            ))}
          </dl>
        ) : null}

        {/* {customerCare.fields.map((field) => {
          if (field.__typename === "MetaobjectField") {
            if (field.reference?.__typename === "MediaImage") {
              const image = getFragmentData(
                imageFragment,
                field.reference.image,
              );

              if (!image?.url) {
                return null;
              }

              return (
                <figure className="aspect-square w-full relative">
                  <Image
                    alt={field.reference.alt ?? image.altText ?? policy.title}
                    fill
                    src={image?.url}
                  />
                </figure>
              );
            }
          } */}
      </nav>
      <article className="mb-48">
        <Suspense fallback={<LoadingSkeleton />}>
          <Prose className="prose-sm mb-8 grid prose-thead:border-hotPink prose-tr:border-hotPink" html={policy.body as string} />
        </Suspense>
      </article>
    </>
  );
}
