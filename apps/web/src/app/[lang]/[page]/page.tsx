import { Image } from "@/components/image.js";
import {
  getFragmentData,
  getPage,
  imageFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export { revalidate } from "@uncnsrdlabel/lib/constants";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = await getPage({ handle: params.page });

  if (!page) return notFound();

  const seo = getFragmentData(seoFragment, page.seo);

  return {
    title: seo?.title || page.title,
    description: seo?.description || page.bodySummary,
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
  const page = await getPage({ handle: params.page });

  if (!page) return notFound();

  const mediaImages = page.mediaImages.references.edges.map((edge) => edge?.node);

  return (
    <>
      <section className="grid gap-0.5">
        {mediaImages?.map((mediaImage, index) => {
          if (mediaImage.__typename !== "MediaImage") {
            return null;
          }

          const image = getFragmentData(imageFragment, mediaImage.image);

          return (
            <figure
              className="item aspect-3/4 relative w-full snap-start"
              key={`${mediaImage.id}-${index}` || index}
            >
              <Image
                alt={image.altText}
                className="h-full object-cover"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                src={image.url}
              />
            </figure>
          );
        })}
      </section>
    </>
  );
}
