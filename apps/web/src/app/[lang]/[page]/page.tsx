import { server } from "@/clients/shopify";
import { Image } from "@/components/media/image";
import { Prose } from "@/components/prose";
import {
  getFragmentData,
  imageFragment,
  pageFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
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
  const pageFragmentRef = await server.getPage({ handle });

  const page = getFragmentData(pageFragment, pageFragmentRef);

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
  const pageFragmentRef = await server.getPage({ handle });

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return notFound();

  return (
    <>
      <Article className="grid place-content-center" variables={{ handle }} />
      {page.sections?.references?.nodes?.map((section) => {
        if (section.__typename === "Metaobject") {
          const sectionLayoutReference = section.fields?.find(
            (field) => field.key === "page_section_layout",
          )?.reference;

          let sectionLayout = "default";

          if (sectionLayoutReference?.__typename === "Metaobject") {
            sectionLayout = sectionLayoutReference?.handle;
          }

          const modules = section.fields?.find(
            (field) => field.key === "modules",
          )?.references?.nodes;

          const backgroundMedia = section.fields?.find(
            (field) => field.key === "background_media",
          )?.reference;

          let backgroundImage = null;

          if (backgroundMedia?.__typename === "MediaImage") {
            backgroundImage = getFragmentData(
              imageFragment,
              backgroundMedia?.image,
            );
            backgroundImage?.url;
          }

          return (
            <section
              className={cn("section", {
                "has-background": !!backgroundImage?.url,
              })}
              data-active={
                section.fields?.find((field) => field.key === "active")?.value
              }
              data-handle={section.handle}
              data-layout={sectionLayout}
              data-title={
                section.fields?.find((field) => field.key === "title")?.value
              }
              data-updated-at={section.updatedAt}
              key={section.id}
              style={{
                ...(backgroundImage?.url && {
                  backgroundImage: `url(${backgroundImage.url})`,
                }),
              }}
            >
              {modules?.map((module) => {
                if (module.__typename === "Metaobject") {
                  const moduleLayoutReference = module.fields?.find(
                    (field) => field.key === "layout",
                  )?.reference;

                  let moduleLayout = "default";

                  if (moduleLayoutReference?.__typename === "Metaobject") {
                    moduleLayout = moduleLayoutReference?.handle;
                  }

                  return (
                    <section
                      className="module"
                      data-handle={module.handle}
                      data-id={module.id}
                      data-layout={moduleLayout}
                      data-updated-at={module.updatedAt}
                      key={module.id}
                    >
                      {module.fields.map((field) => {
                        let element = null;

                        if (field.value) {
                          switch (field.key) {
                            case "heading_1":
                              const heading1Color =
                                module.fields?.find(
                                  (field) => field.key === "heading_1_color",
                                )?.value ?? "default";

                              element = (
                                <h2 data-color={heading1Color}>
                                  {field.value}
                                </h2>
                              );
                              break;
                            case "heading_2":
                              const heading2Color =
                                module.fields?.find(
                                  (field) => field.key === "heading_2_color",
                                )?.value ?? "default";

                              element = (
                                <h3 data-color={heading2Color}>
                                  {field.value}
                                </h3>
                              );
                              break;
                            case "media":
                              const media = field?.references?.edges.map(
                                (edge) => edge?.node,
                              );

                              element = (
                                <>
                                  {media?.map((medium) => {
                                    let image = null;

                                    if (medium?.__typename === "MediaImage") {
                                      image = getFragmentData(
                                        imageFragment,
                                        medium?.image,
                                      );

                                      if (image?.url) {
                                        return (
                                          <figure className="relative">
                                            <Image
                                              alt={image?.altText || page.title}
                                              className="h-full object-cover"
                                              fill
                                              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                              src={image?.url}
                                            />
                                          </figure>
                                        );
                                      }
                                    }

                                    return null;
                                  })}
                                </>
                              );
                              break;
                            case "text":
                              const textColor =
                                module.fields?.find(
                                  (field) => field.key === "text_color",
                                )?.value ?? "default";

                              element = (
                                <Prose
                                  className={cn({
                                    "prose-hotGreen": textColor === "hotGreen",
                                    "prose-hotOrange":
                                      textColor === "hotOrange",
                                    "prose-hotPink": textColor === "hotPink",
                                    "prose-white": textColor === "white",
                                  })}
                                  html={field.value}
                                />
                              );
                              break;
                          }
                        }
                        return element;
                      })}
                    </section>
                  );
                }

                return null;
              })}
            </section>
          );
        }

        return null;
      })}

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
    </>
  );
}
