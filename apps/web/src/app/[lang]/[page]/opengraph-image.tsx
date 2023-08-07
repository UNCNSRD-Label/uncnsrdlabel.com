import { getPage } from "@uncnsrdlabel/graphql-shopify-storefront/utilities";
import { OpengraphImage } from "@uncnsrdlabel/ui/components/opengraph-image";

export const runtime = "edge";

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
