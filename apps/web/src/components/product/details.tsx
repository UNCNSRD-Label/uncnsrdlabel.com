import { PriceAndCompareAtPrice } from "@/components/price-and-compare-at-price";
import { ProductDetailsTabs } from "@/components/product/details-tabs";
import { PurchaseOptions } from "@/components/product/purchase-options";
import { SizeGuide } from "@/components/product/size-guide";
import { Tracking } from "@/components/product/tracking";
import { Prose } from "@/components/prose";
import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import { RulerSquareIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@uncnsrdlabel/components/atoms/popover";
import {
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  type FragmentType
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { type ResolvedIntlConfig } from "react-intl";
import { Product as ProductSchema, WithContext } from "schema-dts";
import { ProductMedia } from "./media";

export async function ProductDetails({
  productDetailsFragmentRef,
  lang,
}: {
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
  lang: Intl.BCP47LanguageTag;
}) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

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
      <Tracking productDetailsFragmentRef={productDetailsFragmentRef} />

      <ProductMedia productDetailsFragmentRef={productDetailsFragmentRef} />

      <section
        className="relative z-10 col-span-full grid h-full min-h-[100dvh] content-start gap-6 overflow-hidden overflow-y-auto bg-white p-6 sm:col-start-3 sm:col-end-11 sm:min-h-fit lg:col-start-7 lg:col-end-13 lg:mr-8 lg:h-[calc(85dvh-4rem)] lg:bg-white/90 lg:shadow lg:backdrop-blur lg:backdrop-saturate-50 xl:col-start-9"
        id="details"
      >
        <h3 data-testid="product-name" className="box-decoration-clone text-xl">
          {product.title}
        </h3>

        <PriceAndCompareAtPrice
          className="grid-flow-col text-sm"
          lang={lang}
          productDetailsFragmentRef={productDetailsFragmentRef}
        />

        {product.descriptionHtml ? (
          <Prose
            className="prose-thead:border-hotPink prose-tr:border-hotPink text-xs leading-tight"
            html={product.descriptionHtml}
          />
        ) : null}

        <PurchaseOptions
          lang={lang}
          productDetailsFragmentRef={productDetailsFragmentRef}
        />

        {product.productType && <Popover>
          <PopoverTrigger className="flex gap-4 content-center items-center btn btn-xs justify-center">
            <RulerSquareIcon />
            {intl.formatMessage({
              id: "component.ProductDetails.size-guide.popover.trigger",
            })}
          </PopoverTrigger>
          <PopoverContent>
            <SizeGuide lang={lang} productType={product.productType} />
          </PopoverContent>
        </Popover>}

        <ProductDetailsTabs
          className=""
          excludedKeys={[
            "complementary_products",
            "line",
            "related_products",
            "shape",
          ]}
          lang={lang}
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
