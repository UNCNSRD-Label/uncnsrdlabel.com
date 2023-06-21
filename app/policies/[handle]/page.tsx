import type { Metadata } from "next";

import Prose from "components/prose";
import { getPolicy } from "lib/shopify";
import { notFound } from "next/navigation";

import { PolicyHandle } from "lib/shopify/types";

export const runtime = "edge";

export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params,
}: {
  params: { handle: PolicyHandle };
}): Promise<Metadata> {
  const policy = await getPolicy(params.handle);

  if (!policy) return notFound();

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
  params: { handle: PolicyHandle };
}) {
  const policy = await getPolicy(params.handle);

  if (!policy) return notFound();

  return <Prose className="mb-8" html={policy.body as string} />;
}
