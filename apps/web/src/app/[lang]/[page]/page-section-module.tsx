import { Image } from "@/components/media/image";
import { Prose } from "@/components/prose";
import { breakpoints } from "@/lib/tailwind";
import {
  getFragmentData,
  imageFragment,
  pageSectionModuleFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, type ClassValue } from "@uncnsrdlabel/lib";
import { CSSProperties } from "react";

export function PageSectionModule({
  pageSectionModuleFragmentRef,
}: {
  pageSectionModuleFragmentRef: FragmentType<typeof pageSectionModuleFragment>;
}) {
  const pageSectionModule = getFragmentData(
    pageSectionModuleFragment,
    pageSectionModuleFragmentRef,
  );

  const classes = pageSectionModule.fields?.find(
    (field) => field.key === "classes",
  )?.value;

  const style = pageSectionModule.fields?.find((field) => field.key === "style")
    ?.value;

  const backgroundColor = pageSectionModule.fields?.find(
    (field) => field.key === "background_color",
  )?.value;

  const backgroundMedia = pageSectionModule.fields?.find(
    (field) => field.key === "background_media",
  )?.reference;

  let backgroundImage = null;

  if (backgroundMedia?.__typename === "MediaImage") {
    backgroundImage = getFragmentData(imageFragment, backgroundMedia?.image);
    backgroundImage?.url;
  }

  return (
    <section
      className={cn(
        "pageSectionModule relative",
        backgroundColor && `bg-${backgroundColor}`,
        {
          "has-background": !!backgroundImage?.url,
        },
        classes && (JSON.parse(classes ?? "") as ClassValue),
      )}
      data-handle={pageSectionModule.handle}
      data-updated-at={pageSectionModule.updatedAt}
      key={pageSectionModule.id}
      style={{
        ...(backgroundImage?.url && {
          backgroundImage: `url(${backgroundImage.url})`,
        }),
        gridArea: pageSectionModule.handle,
        ...(style && (JSON.parse(style ?? "") as CSSProperties)),
      }}
    >
      {pageSectionModule.fields.map((field) => {
        let element = null;

        if (field.value) {
          switch (field.key) {
            case "heading_1":
              const heading1Color =
                pageSectionModule.fields?.find(
                  (field) => field.key === "heading_1_color",
                )?.value ?? "default";

              element = (
                <h2 data-color={heading1Color} key={field.key}>
                  {field.value}
                </h2>
              );
              break;
            case "heading_2":
              const heading2Color =
                pageSectionModule.fields?.find(
                  (field) => field.key === "heading_2_color",
                )?.value ?? "default";

              element = (
                <h3 data-color={heading2Color} key={field.key}>
                  {field.value}
                </h3>
              );
              break;
            case "media":
              const media = field?.references?.edges.map((edge) => edge?.node);

              element = (
                <>
                  {media?.map((medium) => {
                    let image = null;

                    if (medium?.__typename === "MediaImage") {
                      image = getFragmentData(imageFragment, medium?.image);

                      if (image?.url) {
                        return (
                          <figure className="absolute inset-0" key={image?.id}>
                            <Image
                              alt={image.altText || ""}
                              blurDataURL={image.blurDataURL}
                              className="h-full object-contain"
                              fill
                              key={medium.id}
                              sizes={`(max-width: ${breakpoints.sm.max.toString()}) 100vw, (max-width: ${breakpoints.md.max.toString()}) 50vw, (max-width: ${breakpoints.lg.max.toString()}) 33vw, 25vw`}
                              src={image.url}
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
                pageSectionModule.fields?.find(
                  (field) => field.key === "text_color",
                )?.value ?? "default";

              const hashtag_regexp = /(^|\s)(#[a-z\d-]+)/ig

              const value = field.value.replaceAll(
                hashtag_regexp,
                "<span class=\"hashtag text-hotPink\">$2</span>"
              );

              element = (
                <Prose
                  className={cn("max-w-full prose-thead:border-hotPink prose-tr:border-hotPink whitespace-pre-line", {
                    "prose-hotGreen": textColor === "hotGreen",
                    "prose-hotOrange": textColor === "hotOrange",
                    "prose-hotPink": textColor === "hotPink",
                    "prose-white": textColor === "white",
                  })}
                  html={value}
                  key={field.key}
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
