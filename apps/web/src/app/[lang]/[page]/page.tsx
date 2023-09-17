import { server } from "@/clients/shopify";
import { Image } from "@/components/media/image";
import {
  getFragmentData,
  imageFragment,
  pageFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHydrated as Article } from "./article-hydrated";

export { revalidate } from "@uncnsrdlabel/lib";

// export const runtime = "edge";

export async function generateMetadata({
  params: { page: handle },
}: {
  params: { page: string };
}): Promise<Metadata> {
  const pageFragmentRef = await server.getPage(
    { handle },
  );

  const page = getFragmentData(
    pageFragment,
    pageFragmentRef,
  );

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

export default async function Page({
  params: { page: handle },
}: {
  params: { page: string };
}) {
  const pageFragmentRef = await server.getPage(
    { handle },
  );

  const page = getFragmentData(
    pageFragment,
    pageFragmentRef,
  );

  if (!page) return notFound();

  const mediaImages = page.mediaImages?.references?.edges.map(
    (edge) => edge?.node,
  );

  return (
    <>
      <section className="grid gap-0.5">
        {mediaImages?.map((mediaImage, index) => {
          if (mediaImage.__typename !== "MediaImage") {
            return null;
          }

          const image = getFragmentData(imageFragment, mediaImage.image);

          if (!image) {
            return null;
          }

          return (
            <figure
              className="item aspect-3/4 relative w-full snap-start"
              key={`${mediaImage.id}-${index}` || index}
            >
              <Image
                alt={image.altText || page.title}
                className="h-full object-cover"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                src={image.url}
              />
            </figure>
          );
        })}
      </section>
      <Article variables={{ handle }} />
    </>
  );
}
