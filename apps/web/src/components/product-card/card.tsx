import { AddToCart } from "@/components/cart/add-to-cart";
import { LinkedDataProductGroup } from "@/components/linked-data/product-group";
import { Image } from "@/components/media/image";
import { getDictionary } from "@/lib/dictionary";
import { type ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import {
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  productVariantConnectionFragment,
  type FragmentType,
  type SellingPlanGroup,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { PriceAndCompareAtPrice } from "../price-and-compare-at-price";

export function ProductCard({
  className,
  lang,
  productDetailsFragmentRef,
  sizes,
}: {
  className?: string;
  lang: Intl.BCP47LanguageTag;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
  sizes: string;
}) {
  const dictionary = getDictionary({ lang });

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const images = product.images.edges.map((edge) => edge?.node);

  const image = images
    .map((imageFragmentRef) => getFragmentData(imageFragment, imageFragmentRef))
    .map((image, index) => ({
      altText: image.altText ?? product.title,
      id: image.id ?? `image-${index}`,
      src: image.url,
    }))
    .slice(0, 1);

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

  return (
    <>
      <div
        className={cn("card col-gap-4 grid w-full grid-flow-col", className)}
      >
        <figure
          className="relative grid aspect-square gap-8 overflow-hidden"
        >
          <Image
            alt={image[0].altText}
            className="aspect-2/3 snap snap-x-mandatory snap-align-start relative w-full overflow-y-hidden object-contain"
            fill
            sizes={sizes}
            src={image[0].src}
            style={{
              filter:
                "brightness(1.5) drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
            }}
          />
        </figure>

        <div className="flex flex-col gap-4 pt-4 justify-between">
        <div className="flex flex-col gap-4">
          <h3
            data-testid="product-name"
            className="box-decoration-clone text-sm"
          >
            {product.title}
          </h3>
          <PriceAndCompareAtPrice
            className="text-xs"
            lang={lang}
            productDetailsFragmentRef={productDetailsFragmentRef}
          />
          </div>
          <AddToCart
            availableForSale={product.availableForSale}
            container="ProductCard"
            dictionary={dictionary}
            lang={lang}
            options={product.options}
            preOrder={preOrder as Partial<SellingPlanGroup> | undefined}
            variants={variants}
            view="compact"
          />
        </div>
      </div>
      <LinkedDataProductGroup lang={lang} product={product} />
    </>
  );
}
