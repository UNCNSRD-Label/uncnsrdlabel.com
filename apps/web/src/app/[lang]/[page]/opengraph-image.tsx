import { server } from "@/clients/shopify";
import { OpengraphImage } from "@/components/opengraph-image";
import {
  getFragmentData,
  pageFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";


export const runtime = "edge";

export default async function Image({
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


  const seo = getFragmentData(seoFragment, page.seo);

  const title = seo?.title || page.title;

  return await OpengraphImage({ title });
}
