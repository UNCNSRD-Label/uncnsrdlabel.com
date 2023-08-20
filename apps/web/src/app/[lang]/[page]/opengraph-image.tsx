import { OpengraphImage } from "@/components/opengraph-image";
import { getFragmentData, getPage, seoFragment } from "@uncnsrdlabel/graphql-shopify-storefront";

export const runtime = "edge";

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage({ handle: params.page });
  
  const seo = getFragmentData(seoFragment, page.seo);
  
  const title = seo?.title || page.title;

  return await OpengraphImage({ title });
}
