import { server } from "@/clients/shopify";
import { Prose } from "@/components/prose";
import {
  getFragmentData,
  pageFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";

export type ArticleProps = {
  className?: string;
  variables: { handle: string };
};

export async function Article(props: ArticleProps) {
  const { className, variables } = props;

  const pageFragmentRef = await server.getPage(variables);

  const page = getFragmentData(pageFragment, pageFragmentRef);

  return page.body ? (
    <article className={cn("grid snap-y snap-start gap-0.5", className)}>
      {/* <h1 className="mb-8 text-5xl uppercase">{page.title}</h1> */}
      <Prose className="mb-8" html={page.body} />
    </article>
  ) : null;
}
