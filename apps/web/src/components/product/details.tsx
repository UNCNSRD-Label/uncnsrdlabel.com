import { PriceAndCompareAtPrice } from "@/components/price-and-compare-at-price";
import { ProductDetailsTabs } from "@/components/product/details-tabs";
import { PurchaseOptions } from "@/components/product/purchase-options";
import { Prose } from "@/components/prose";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
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
      <ProductMedia productDetailsFragmentRef={productDetailsFragmentRef} />

      <section
        className="relative z-10 grid gap-3 col-span-full h-full min-h-[100dvh] lg:h-[calc(85dvh-4rem)] overflow-hidden overflow-y-auto p-6 sm:col-start-3 sm:col-end-11 sm:min-h-fit lg:col-start-7 lg:col-end-13 lg:mr-8 lg:rounded-xl bg-white lg:bg-white/90 lg:shadow lg:backdrop-blur lg:backdrop-saturate-50 xl:col-start-9 content-start"
        id="details"
      >
        <h3 data-testid="product-name" className="box-decoration-clone text-xl">
          {product.title}
        </h3>

        <PriceAndCompareAtPrice
          className="grid-flow-col text-sm"
          productDetailsFragmentRef={productDetailsFragmentRef}
        />

        {product.descriptionHtml ? (
          <Prose
            className="prose-thead:border-hotPink prose-tr:border-hotPink text-xs leading-tight"
            html={product.descriptionHtml}
          />
        ) : null}

        <div className="relative">
          <PurchaseOptions
            productDetailsFragmentRef={productDetailsFragmentRef}
          />
        </div>

        <ProductDetailsTabs
          className=""
          excludedKeys={["complementary_products", "line", "related_products", "shape"]}
          productDetailsFragmentRef={productDetailsFragmentRef}
        />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="product-jsonld"
      />
    </>
  );
}
