import type { Metadata } from "next";

import Image from "@/components/image";
import Prose from "@/components/prose";
import { getPage } from "@/lib/shopify";
import { notFound } from "next/navigation";

export const runtime = "edge";

export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(page.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);

  if (!page) return notFound();

  const images = page.images;

  return (
    <>
      <article className="grid gap-0.5">
        <h1 className="mb-8 text-5xl uppercase">{page.title}</h1>
        <Prose className="mb-8" html={page.body as string} />
        <span className="mb-8 hidden text-sm italic">
          {`This document was last updated on ${new Intl.DateTimeFormat(
            undefined,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          ).format(new Date(page.updatedAt))}.`}
        </span>
      </article>
      <section className="grid gap-0.5">
        {[...images].map((image, index) => (
          <figure
            className="item relative aspect-3/4 w-full snap-start"
            key={image.id || index}
          >
            <Image
              alt={image.altText}
              className="h-full object-cover"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              src={image.url}
            />
          </figure>
        ))}
      </section>
    </>
  );
}
