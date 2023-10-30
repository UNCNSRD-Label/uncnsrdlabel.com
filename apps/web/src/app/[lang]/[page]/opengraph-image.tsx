'use server';

import { OpengraphImage } from "@/components/opengraph-image";
import { state$ } from "@/lib/store";
import {
  getFragmentData,
  getPageHandler,
  pageFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";

// export const runtime = "edge";

export default async function Image({
  params: { page: handle },
}: {
  params: { page: string };
}) {
  const lang = state$.lang.get();

  const pageFragmentRef = await getPageHandler(
    { handle }, lang,
  );

  const page = getFragmentData(
    pageFragment,
    pageFragmentRef,
  );


  const seo = getFragmentData(seoFragment, page.seo);

  const title = seo?.title || page.title;

  return await OpengraphImage({ title });
}
