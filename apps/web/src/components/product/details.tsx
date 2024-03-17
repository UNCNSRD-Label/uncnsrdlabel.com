import { AddToCart } from "@/components/cart/add-to-cart";
import { LinkedDataProductGroup } from "@/components/linked-data/product-group";
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
import { type ResultOf } from "@graphql-typed-document-node/core";
import { RulerSquareIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@uncnsrdlabel/components/atoms/popover";
import {
  getFragmentData,
  productDetailsFragment,
  productVariantConnectionFragment,
  productVariantFragment,
  type FragmentType,
  type SellingPlanGroup
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { GiCupidonArrow } from "react-icons/gi";
import { type ResolvedIntlConfig } from "react-intl";
import { MediaViewer } from "./media-viewer";

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

  const productVariantConnectionFragmentRef = product.variants;

  const productVariantFragments = getFragmentData(
    productVariantConnectionFragment,
    productVariantConnectionFragmentRef,
  );

  const productVariants: ResultOf<typeof productVariantFragment>[] =
    productVariantFragments.edges.map(({ node }) =>
      getFragmentData(productVariantFragment, node),
    );

  const sellingPlanGroupNodes = product.sellingPlanGroups?.edges?.map(
    (edge) => edge.node,
  );

  const preOrder = sellingPlanGroupNodes.find(
    ({ name }) => name === "Pre-order",
  );

  const releaseDate = product.releaseDate?.value?.split("T")[0];

  return (
    <>
      <Tracking productDetailsFragmentRef={productDetailsFragmentRef} />

      <div className="portrait:aspect-2/3 portrait:sm:aspect-4/3 relative mb-2 grid portrait:col-span-full landscape:col-span-6 landscape:md:col-span-full">
        <MediaViewer
          className="col-span-full"
          productDetailsFragmentRef={productDetailsFragmentRef}
        />

        <section className="sm:p4 absolute mb-8 grid justify-items-end gap-3 self-end justify-self-end p-2 lg:hidden">
          <h2
            data-testid="product-name"
            className="bg-hotPink w-fit max-w-[64ch] rotate-1 text-balance box-decoration-clone p-0.5 text-xs sm:text-sm"
          >
            {product.title}
          </h2>
          <PriceAndCompareAtPrice
            className="bg-hotPink text-xxs w-fit -rotate-1 grid-flow-col p-0.5 sm:text-xs"
            lang={lang}
            productDetailsFragmentRef={productDetailsFragmentRef}
          />
        </section>

        <GiCupidonArrow className="text-hotPink absolute -bottom-2 right-2 h-8 w-8 rotate-45 justify-self-end" />
      </div>

      <section className="sm:bg-light lg:bg-opaque-white grid w-full content-start gap-6 self-start justify-self-end overflow-hidden overflow-y-auto p-4 lg:absolute lg:mr-8 lg:mt-16 lg:max-h-[calc(100dvh-theme(height.48))] lg:w-fit lg:max-w-lg lg:shadow portrait:col-span-full landscape:col-span-6 landscape:pt-16 landscape:md:col-span-full landscape:md:pt-4">
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
          lang={lang}
          options={product.options}
          productDetailsFragmentRef={productDetailsFragmentRef}
          variants={productVariants}
        />

        <AddToCart
          availableForSale={product.availableForSale}
          className="py-4"
          container="PurchaseOptions"
          dictionary={dictionary}
          lang={lang}
          options={product.options}
          preOrder={preOrder as Partial<SellingPlanGroup> | undefined}
          variants={productVariants}
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
              className="mx-auto border p-4"
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
            content={releaseDate}
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

      <LinkedDataProductGroup lang={lang} product={product} />
    </>
  );
}
