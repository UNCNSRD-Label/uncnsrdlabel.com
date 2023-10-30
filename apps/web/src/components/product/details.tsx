import { ProductDetailsTabs } from "@/components/product/details-tabs";
// import { NavigationMenu } from "@/components/product/navigation-menu";
import { PurchaseOptions } from "@/components/product/purchase-options";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/client";
// import { useRef } from "react";
// import { MetafieldMapper } from "@/components/product/metafield-mapper";
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

  // const sectionElementRefs = [
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  // ];

  return (
    <>
      {/* <NavigationMenu
        className="fixed inset-x-0 bottom-0 z-50 w-full sm:hidden"
        sectionElementRefs={sectionElementRefs}
      /> */}

      <section className="grid min-h-[100dvh] grid-cols-12 content-center lg:h-[100dvh] lg:overflow-y-hidden">
        <ProductMedia
          // ref={sectionElementRefs[0]}
          productDetailsFragmentRef={productDetailsFragmentRef}
        />

        <div
          className="relative col-span-full h-full md:h-[80dvh] sm:col-start-3 lg:col-start-7 sm:col-end-11 lg:col-end-12 lg:-top-12 lg:rounded-xl lg:bg-white/90 lg:shadow lg:backdrop-blur lg:backdrop-saturate-50 xl:col-start-9 z-10 overflow-hidden"
          id="details"
        >
          <div className="absolute grid inset-0 overflow-y-auto p-6 pt-20 sm:pt-6 lg:pb-48">
            <PurchaseOptions
              // ref={sectionElementRefs[1]}
              productDetailsFragmentRef={productDetailsFragmentRef}
            />
            <ProductDetailsTabs
              className="mt-8"
              excludedKeys={["complementary_products", "related_products"]}
              // MetafieldMapper={MetafieldMapper}
              productDetailsFragmentRef={productDetailsFragmentRef}
            />
          </div>
          <div className="bg-gradient-to-t from-white to-transparent to-15% absolute inset-0 z-20 pointer-events-none hidden lg:block"></div>
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
