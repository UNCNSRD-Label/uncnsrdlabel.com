'use server';

import { Prose } from "@/components/prose";
import { state$ } from "@/lib/store";
import { type PageProps } from "@/types/next";
import {
  getFragmentData,
  getMenuHandler,
  getPolicyHandler,
  shopPolicyFragment,
  type PolicyName
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { cn } from "@uncnsrdlabel/lib";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// export const runtime = "edge";

export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params: { handle },
}: {
  params: PageProps & { handle: PolicyName };
}): Promise<Metadata> {
  const lang = state$.lang.get();

  const shopPolicyFragmentRef = await getPolicyHandler({handle}, lang);

  if (!shopPolicyFragmentRef) return notFound();

  const policy = getFragmentData(shopPolicyFragment, shopPolicyFragmentRef);

  return {
    title: policy.title,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(policy.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
  };
}

export default async function InformationPage({
  params,
}: {
  params: { handle: PolicyName };
}) {
  const lang = state$.lang.get();

  const handle = params.handle as PolicyName;

  const shopPolicyFragmentRef = await getPolicyHandler({handle}, lang);

  const customerCareMenu = await getMenuHandler({ handle: "customer-care" }, lang);

  if (!shopPolicyFragmentRef) return notFound();

  const policy = getFragmentData(shopPolicyFragment, shopPolicyFragmentRef);

  return (
    <>
      <nav className="md:min-h-fullMinusNavbar relative hidden md:grid content-start md:justify-center">
        {customerCareMenu.items.length ? (
          <dl className="md:sticky md:top-64 md:mb-64 grid content-start gap-4">
            <dt className="text-sm uppercase">Customer Care</dt>
            {customerCareMenu.items.map((item, index) => (
              <dd key={item.title || index}>
                <Link href={item.url ?? "#"} className={cn("text-xs sm:text-xxs transition uppercase duration-150 ease-in-out", {
                  "decoration-dotted underline underline-offset-8": item.url?.endsWith(params.handle)
                })}>{item.title}</Link>
              </dd>
            ))}
          </dl>
        ) : null}

        {/* {customerCare.fields.map((field) => {
          if (field.__typename === "MetaobjectField") {
            if (field.reference?.__typename === "MediaImage") {
              console.log(field.reference);
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
        <Prose className="prose-sm mb-8 grid" html={policy.body as string} />
      </article>
    </>
  );
}
