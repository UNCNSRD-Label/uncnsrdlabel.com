import type { Metadata } from "next";

import { Image } from "@/components/image";
import { getPage } from "@uncnsrdlabel/graphql-shopify-storefront";
import { notFound } from "next/navigation";

export { revalidate } from "@uncnsrdlabel/lib/constants";

export const runtime = "edge";

// export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = useGetPage(params.page);

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
  const page = useGetPage(params.page);

  if (!page) return notFound();

  const images = page.imagesArray;

  return (
    <>
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
