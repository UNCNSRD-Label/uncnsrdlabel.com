import { getPage } from "@uncnsrdlabel/lib/shopify";
import OpengraphImage from "@uncnsrdlabel/ui/components/opengraph-image";

export const runtime = "edge";

export async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
