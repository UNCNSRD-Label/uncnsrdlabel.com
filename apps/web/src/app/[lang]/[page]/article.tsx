"use client";

import { server } from "@/clients/shopify";
import { Prose } from "@/components/prose";
import {
  getFragmentData,
  pageFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export type ArticleProps = {
  variables: { handle: string };
};

export async function Article(props: ArticleProps) {
  const { variables } = props;

  const pageFragmentRef = await server.getPage(variables);

  const page = getFragmentData(pageFragment, pageFragmentRef);

  console.log({ page });

  return (
    <article className="grid gap-0.5">
      <h1 className="mb-8 text-5xl uppercase">{page.title}</h1>
      <Prose className="mb-8" html={page.body} />
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
      {page.sections?.references?.nodes?.map((section) => {
        if (section.__typename === "Metaobject") {
          const layouReference = section.fields?.find(
            (field) => field.key === "page_section_layout",
          )?.reference;

          let layout = "default";

          if (layouReference?.__typename === "Metaobject") {
            layout = layouReference?.handle;
          }

          const modules = section.fields?.find(
            (field) => field.key === "modules",
          )?.references?.nodes;

          console.log({ modules });
          return (
            <section
              className="container"
              data-active={
                section.fields?.find((field) => field.key === "active")?.value
              }
              data-handle={section.handle}
              data-layout={layout}
              data-title={
                section.fields?.find((field) => field.key === "title")?.value
              }
              data-updatedAt={section.updatedAt}
              key={section.id}
            >
              {modules?.map((module) => {
                if (module.__typename === "Metaobject") {
                  return (
                    <section
                      className="module"
                      data-handle={module.handle}
                      data-id={module.id}
                      // data-layout={module.layout}
                      key={module.id}
                    >
                      {module.fields.map((field) => {
                        let element = null;

                        if (field.value) {
                          switch (field.key) {
                            case "heading_1":
                              element = <h2>{field.value}</h2>;
                              break;
                            case "heading_2":
                              element = <h3>{field.value}</h3>;
                              break;
                            case "text":
                              element = <Prose html={field.value} />;
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
    </article>
  );
}
