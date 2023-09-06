import type { Metadata } from "next";

import { Prose } from "@/components/prose";
import { getFragmentData, getPolicy, shopPolicyFragment, type PolicyName } from "@uncnsrdlabel/graphql-shopify-storefront";
import { type PageProps } from "@uncnsrdlabel/types";
import { notFound } from "next/navigation";

// export const runtime = "edge";

export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params: { handle },
}: {
  params: PageProps & { handle: PolicyName };
}): Promise<Metadata> {
  const shopPolicyFragmentRef = await getPolicy(handle);

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

export default async function Policy({
  params,
}: {
  params: { handle: PolicyName };
}) {
  const shopPolicyFragmentRef = await getPolicy(params.handle);

  if (!shopPolicyFragmentRef) return notFound();

  const policy = getFragmentData(shopPolicyFragment, shopPolicyFragmentRef);

  return (
    <article className="mx-8 mb-48 grid gap-0.5 sm:mx-auto sm:py-16">
      <Prose className="mb-8" html={policy.body as string} />
    </article>
  );
}
