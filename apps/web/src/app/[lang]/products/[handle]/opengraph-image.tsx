import { OpengraphImageResponse } from "@/components/opengraph-image-response";
import { type PageProps } from "@/types/next";
import {
  getFragmentData,
  getProductDetailsByHandleHandler,
  imageFragment,
  productDetailsFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export const contentType = "image/png";

export const size = {
  width: 1200,
  height: 630,
};

export default async function OpenGraphImage({
  params: { handle, lang },
}: PageProps) {
  const productDetailsFragmentRef = await getProductDetailsByHandleHandler({
    variables: { handle },
    lang,
  });

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const seo = getFragmentData(seoFragment, product.seo);

  const title = seo?.title || product.title;
  const price = product.priceRange?.minVariantPrice;
  const productMetafieldFragmentRef = product.openGraphImage;

  if (
    productMetafieldFragmentRef?.__typename === "Metafield" &&
    productMetafieldFragmentRef.reference?.__typename === "MediaImage"
  ) {
    const image = getFragmentData(
      imageFragment,
      productMetafieldFragmentRef.reference.image,
    );

    return await OpengraphImageResponse({
      image,
      price,
      size,
      title,
    });
  }

  return await OpengraphImageResponse({
    price,
    size,
    title,
  });
}
