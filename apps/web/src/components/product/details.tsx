import { AddToCart } from "@/components/cart/add-to-cart";
import { PriceAndCompareAtPrice } from "@/components/price-and-compare-at-price";
import { ProductDetailsTabs } from "@/components/product/details-tabs";
import { SignUpForBackInStockSubscription } from "@/components/product/sign-up-for-back-in-stock-subscription";
import { SizeGuide } from "@/components/product/size-guide";
import { SquarePlacement } from "@/components/product/square-placement";
import { Tracking } from "@/components/product/tracking";
import { VariantSelector } from "@/components/product/variant-selector";
import { Prose } from "@/components/prose";
import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import { RulerSquareIcon } from "@radix-ui/react-icons";
import { type ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@uncnsrdlabel/components/atoms/popover";
import {
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  productMetafieldFragment,
  productVariantConnectionFragment,
  type FragmentType,
  type SellingPlanGroup,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { GiCupidonArrow } from "react-icons/gi";
import { type ResolvedIntlConfig } from "react-intl";
import { Product as ProductSchema, WithContext } from "schema-dts";
import { MediaViewerCompact } from "./media-viewer-compact";
import { MediaViewerFull } from "./media-viewer-full";

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

  const variantsFragmentRefs = product.variants;

  const variantFragments = getFragmentData(
    productVariantConnectionFragment,
    variantsFragmentRefs,
  );

  const variants: Pick<ProductVariant, "id" | "selectedOptions">[] =
    variantFragments.edges.map((edge) => edge?.node);

  const sellingPlanGroupNodes = product.sellingPlanGroups?.edges?.map(
    (edge) => edge.node,
  );

  const preOrder = sellingPlanGroupNodes.find(
    ({ name }) => name === "Pre-order",
  );

  const releaseDateTime = getFragmentData(
    productMetafieldFragment,
    product.release_date,
  )?.value;

  const releaseDate = releaseDateTime?.split("T")[0];

  return (
    <>
      <Tracking productDetailsFragmentRef={productDetailsFragmentRef} />

      <div className="relative mb-2 grid lg:hidden portrait:aspect-2/3 portrait:sm:aspect-4/3 portrait:col-span-full landscape:col-span-6 landscape:md:col-span-full landscape:h-[100dvh] landscape:lg:h-auto">
        <MediaViewerCompact
          productDetailsFragmentRef={productDetailsFragmentRef}
        />

        <section className="sm:p4 absolute mb-8 grid justify-items-end gap-3 self-end justify-self-end p-2 lg:max-h-[calc(100dvh-theme(height.64))]">
          <h2
            data-testid="product-name"
            className="bg-hotPink w-fit max-w-[32ch] text-balance box-decoration-clone p-0.5 text-xs sm:text-sm rotate-1"
          >
            {product.title}
          </h2>
          <PriceAndCompareAtPrice
            className="bg-hotPink text-xxs w-fit grid-flow-col p-0.5 sm:text-xs -rotate-1"
            lang={lang}
            productDetailsFragmentRef={productDetailsFragmentRef}
          />
        </section>

        <GiCupidonArrow className="text-hotPink absolute -bottom-2 right-2 h-8 w-8 rotate-45 justify-self-end" />
      </div>

      <MediaViewerFull
        className="z-0 hidden lg:block col-span-full"
        productDetailsFragmentRef={productDetailsFragmentRef}
      />

      <section className="sm:bg-light lg:bg-opaque-white portrait:col-span-full landscape:col-span-6 landscape:md:col-span-full landscape:pt-16 landscape:md:pt-4 grid w-full content-start gap-6 self-start justify-self-end overflow-hidden overflow-y-auto p-4 lg:absolute lg:mr-8 lg:mt-16 lg:max-h-[calc(100dvh-theme(height.48))] lg:w-fit lg:max-w-md lg:shadow">
        <h2
          data-testid="product-name"
          className="hidden box-decoration-clone text-xl lg:block"
        >
          {product.title}
        </h2>

        <div className="hidden gap-2 lg:grid">
          <PriceAndCompareAtPrice
            className="grid-flow-col text-sm"
            lang={lang}
            productDetailsFragmentRef={productDetailsFragmentRef}
          />

          <SquarePlacement
            handle={product.handle}
            lang={lang}
            options={product.options}
          />
        </div>

        {product.descriptionHtml ? (
          <Prose
            className="prose-thead:border-hotPink prose-tr:border-hotPink text-xs leading-tight"
            html={product.descriptionHtml}
          />
        ) : null}

        <VariantSelector
          options={product.options}
          productDetailsFragmentRef={productDetailsFragmentRef}
          variants={variants}
        />

        <AddToCart
          availableForSale={product.availableForSale}
          className="py-4"
          container="PurchaseOptions"
          dictionary={dictionary}
          lang={lang}
          options={product.options}
          preOrder={preOrder as Partial<SellingPlanGroup> | undefined}
          variants={variants}
        />

        {!product.availableForSale && (
          <>
            <span
              className="mx-auto text-xs"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage(
                  {
                    id: "component.AddToCart.status.out-of-stock",
                  },
                  {
                    a: (chunks) =>
                      `<a href="mailto:hello@uncnsrdlabel.com?subject=Out of stock enquiry for ${product.title} (${product.id})">${chunks}</a>`,
                    product: `${product.title} (${product.id})`,
                  },
                ),
              }}
            />
            <SignUpForBackInStockSubscription
              className="mx-auto border p-4 md:w-2/3"
              handle={product.handle}
              lang={lang}
              options={product.options}
              productDetailsFragmentRef={productDetailsFragmentRef}
            />
          </>
        )}

        {preOrder && releaseDate && (
          <span
            itemProp="releaseDate"
            content={releaseDateTime}
            className="text-xs"
          >
            {intl.formatMessage(
              {
                id: "component.AddToCart.status.pre-order",
              },
              {
                releaseDate: new Date(releaseDate).toLocaleDateString(lang),
              },
            )}
          </span>
        )}

        {product.productType && (
          <Popover>
            <PopoverTrigger className="btn btn-xs flex content-center items-center justify-center gap-4">
              <RulerSquareIcon />
              {intl.formatMessage({
                id: "component.ProductDetails.size-guide.popover.trigger",
              })}
            </PopoverTrigger>
            <PopoverContent>
              <SizeGuide lang={lang} productType={product.productType} />
            </PopoverContent>
          </Popover>
        )}

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
