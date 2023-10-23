import { Prose } from "@/components/prose";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  pageSectionModuleFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, type ClassValue } from "@uncnsrdlabel/lib";
import Image from "next/image";
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
        "pageSectionModule",
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

              element = <h2 data-color={heading1Color} key={field.key}>{field.value}</h2>;
              break;
            case "heading_2":
              const heading2Color =
                pageSectionModule.fields?.find(
                  (field) => field.key === "heading_2_color",
                )?.value ?? "default";

              element = <h3 data-color={heading2Color} key={field.key}>{field.value}</h3>;
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
                          <figure className="relative" key={image?.id}>
                            <Image
                              // TODO: Add image alt fallback
                              alt={image?.altText || ""}
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
                pageSectionModule.fields?.find(
                  (field) => field.key === "text_color",
                )?.value ?? "default";

              const textSize =
                pageSectionModule.fields?.find(
                  (field) => field.key === "text_size",
                )?.value ?? "default";

              element = (
                <Prose
                  className={cn("max-w-full", `prose-${textSize}`, {
                    "prose-hotGreen": textColor === "hotGreen",
                    "prose-hotOrange": textColor === "hotOrange",
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
