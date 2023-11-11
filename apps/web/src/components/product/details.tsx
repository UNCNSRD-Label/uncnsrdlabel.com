import { LoadingDots } from "@/components/loading/dots";
import { ProductDetailsTabs } from "@/components/product/details-tabs";
import { PurchaseOptions } from "@/components/product/purchase-options";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/client";
import { Suspense } from "react";
import { Product as ProductSchema, WithContext } from "schema-dts";
import { ProductMedia } from "./media";

export function Details({
  productDetailsFragmentRef,
}: {
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const featuredImage = getFragmentData(imageFragment, product.featuredImage);

  const jsonLd: WithContext<ProductSchema> = {
    "@context": "https://schema.org",
    "@type": "Product",
    identifier: product.id,
    name: product.title,
    image: {
      "@type": "ImageObject",
      about: featuredImage?.altText || product.title,
      height: featuredImage?.height?.toString() ?? undefined,
      url: featuredImage?.url,
      width: featuredImage?.width?.toString() ?? undefined,
    },
    description: product.description,
  };

  return (
    <>
      <section className="grid min-h-[100dvh] grid-cols-12 content-center lg:h-[100dvh] lg:overflow-y-hidden">
        <ProductMedia
          productDetailsFragmentRef={productDetailsFragmentRef}
        />

        <div
          className="relative z-10 col-span-full h-full min-h-[100dvh] overflow-hidden sm:col-start-3 sm:col-end-11 sm:min-h-fit md:h-[80dvh] lg:-top-12 lg:col-start-7 lg:col-end-12 lg:rounded-xl lg:bg-white/90 lg:shadow lg:backdrop-blur lg:backdrop-saturate-50 xl:col-start-9"
          id="details"
        >
          <div className="absolute inset-0 grid overflow-y-auto p-6 pt-20 sm:pt-6 lg:pb-20 content-start">
            <PurchaseOptions
              productDetailsFragmentRef={productDetailsFragmentRef}
            />
            <Suspense fallback={<LoadingDots />}>
              <ProductDetailsTabs
                className="mt-8"
                excludedKeys={["complementary_products", "related_products"]}
                productDetailsFragmentRef={productDetailsFragmentRef}
              />
            </Suspense>
          </div>
          <div className="pointer-events-none absolute inset-0 z-20 hidden bg-gradient-to-t from-white to-transparent to-15% lg:block"></div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="product-jsonld"
      />
    </>
  );
}
