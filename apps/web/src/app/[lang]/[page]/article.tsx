import { server } from "@/clients/shopify";
import { Prose } from "@/components/prose";
import {
  getFragmentData,
  pageFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { HTMLProps } from "react";

export type ArticleProps = HTMLProps<HTMLElement> & {
  variables: { handle: string };
};

export async function Article(props: ArticleProps) {
  const { children, className, style, variables } = props;

  const pageFragmentRef = await server.getPage(variables);

  const page = getFragmentData(pageFragment, pageFragmentRef);

  return (
    <article className={cn("grid snap-y snap-start gap-0.5", className)} style={style}>
      {/* <h1 className="mb-8 text-5xl uppercase">{page.title}</h1> */}
      {page.body && <Prose className="mb-8" html={page.body} />}
      {children}
    </article>
  );
}
