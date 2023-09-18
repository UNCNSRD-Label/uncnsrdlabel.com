import { server } from "@/clients/shopify";
import { Prose } from "@/components/prose";
import {
  getFragmentData,
  imageFragment,
  pageFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export type ArticleProps = {
  variables: { handle: string };
};

export async function Article(props: ArticleProps) {
  const { variables } = props;

  const pageFragmentRef = await server.getPage(variables);

  const page = getFragmentData(pageFragment, pageFragmentRef);

  return (
    <article className="grid gap-0.5 snap-start snap-y">
      {/* <h1 className="mb-8 text-5xl uppercase">{page.title}</h1> */}
      {/* <Prose className="mb-8" html={page.body} /> */}
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

          const backgroundMedia = section.fields?.find((field) => field.key === "background_media")?.reference;

          let backgroundImage = null;

          if (backgroundMedia?.__typename === "MediaImage") {
            backgroundImage = getFragmentData(imageFragment, backgroundMedia?.image);
            backgroundImage?.url
          }

          return (
            <section
              className="section"
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
                              const heading1Color = module.fields?.find(
                                (field) => field.key === "heading_1_color",
                              )?.value ?? "default";

                              element = <h2 data-color={heading1Color}>{field.value}</h2>;
                              break;
                            case "heading_2":
                              const heading2Color = module.fields?.find(
                                (field) => field.key === "heading_2_color",
                              )?.value ?? "default";

                              element = <h3 data-color={heading2Color}>{field.value}</h3>;
                              break;
                            case "text":                                        
                              const textColor = module.fields?.find(
                                (field) => field.key === "text_color",
                              )?.value ?? "default";

                              element = <Prose className="prose-pink" html={field.value} />;
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
    </article>
  );
}
